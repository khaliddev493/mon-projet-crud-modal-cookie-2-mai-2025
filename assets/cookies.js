document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    // Récupération des modals par leur ID pour pouvoir les manipuler plus tard
    const modals = {
      cookieConsent: document.getElementById('cookieConsentModal'), // Modal pour le consentement des cookies
      warning: document.getElementById('warningModal'), // Modal d'avertissement
      username: document.getElementById('usernameModal'), // Modal pour entrer le nom d'utilisateur
    };

    // Récupération des boutons par leur ID pour attacher des gestionnaires d'événements
    const buttons = {
      acceptCookies: document.getElementById('acceptCookies'), // Bouton pour accepter les cookies
      rejectCookies: document.getElementById('rejectCookies'), // Bouton pour refuser les cookies
      closeWarning: document.getElementById('closeWarning'), // Bouton pour fermer le modal d'avertissement
      cancelUsername: document.getElementById('cancelUsername'), // Bouton pour annuler l'entrée du nom d'utilisateur
      saveUsername: document.getElementById('saveUsername'), // Bouton pour sauvegarder le nom d'utilisateur
    };

    // Récupération des autres éléments nécessaires pour afficher ou manipuler les données
    const usernameInput = document.getElementById('usernameInput'); // Champ d'entrée pour le nom d'utilisateur
    const welcomeMessage = document.getElementById('welcomeMessage'); // Message de bienvenue
    const personalWelcome = document.getElementById('personalWelcome'); // Message personnalisé de bienvenue

    // Utility functions
    // Fonction pour définir un cookie avec un nom, une valeur et une durée en jours
    const setCookie = (name, value, days = 365) => {
      const expires = new Date(Date.now() + days * 864e5).toUTCString(); // Calcul de la date d'expiration
      document.cookie = `${name}=${value};expires=${expires};path=/`; // Création du cookie
    };

    // Fonction pour récupérer la valeur d'un cookie par son nom
    const getCookie = (name) => {
      // Transformation des cookies en un objet clé-valeur
      const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('='); // Séparation clé/valeur
        acc[key] = value; // Ajout au dictionnaire
        return acc;
      }, {});
      return cookies[name] || ''; // Retourne la valeur du cookie ou une chaîne vide si non trouvé
    };

    // Fonction pour afficher ou masquer un modal
    const toggleModal = (modal, show) => {
      modal.classList.toggle('hidden', !show); // Ajoute ou enlève la classe 'hidden' selon le paramètre 'show'
    };

    // Event Handlers
    // Gestionnaire pour le bouton "Accepter les cookies"
    const handleAcceptCookies = () => {
      toggleModal(modals.cookieConsent, false); // Masque le modal de consentement des cookies
      toggleModal(modals.username, true); // Affiche le modal pour entrer le nom d'utilisateur
    };

    // Gestionnaire pour le bouton "Refuser les cookies"
    const handleRejectCookies = () => {
      toggleModal(modals.cookieConsent, false); // Masque le modal de consentement des cookies
      toggleModal(modals.warning, true); // Affiche le modal d'avertissement
    };

    // Gestionnaire pour le bouton "Fermer l'avertissement"
    const handleCloseWarning = () => {
      toggleModal(modals.warning, false); // Masque le modal d'avertissement
    };

    // Gestionnaire pour le bouton "Annuler" dans le modal du nom d'utilisateur
    const handleCancelUsername = () => {
      toggleModal(modals.username, false); // Masque le modal du nom d'utilisateur
      toggleModal(modals.cookieConsent, true); // Réaffiche le modal de consentement des cookies
    };

    // Gestionnaire pour le bouton "Sauvegarder" dans le modal du nom d'utilisateur
    const handleSaveUsername = () => {
      const name = usernameInput.value.trim(); // Récupère et nettoie la valeur entrée par l'utilisateur
      if (name) { // Vérifie si un nom a été entré
        setCookie('username', name); // Sauvegarde le nom dans un cookie
        personalWelcome.textContent = `Bienvenue ${name} !`; // Met à jour le message personnalisé
        toggleModal(welcomeMessage, true); // Affiche le message de bienvenue
        toggleModal(modals.username, false); // Masque le modal du nom d'utilisateur
      } else {
        alert('Veuillez entrer votre nom.'); // Alerte si le champ est vide
      }
    };

    // Initialization
    // Fonction d'initialisation pour configurer l'état initial de l'application
    const init = () => {
      const username = getCookie('username'); // Vérifie si un nom d'utilisateur est déjà sauvegardé dans les cookies
      if (username) { // Si un nom est trouvé
        personalWelcome.textContent = `Bienvenue ${username} !`; // Met à jour le message personnalisé
        toggleModal(welcomeMessage, true); // Affiche le message de bienvenue
        toggleModal(modals.cookieConsent, false); // Masque le modal de consentement des cookies
      }

      // Ajout des gestionnaires d'événements aux boutons
      buttons.acceptCookies.addEventListener('click', handleAcceptCookies);
      buttons.rejectCookies.addEventListener('click', handleRejectCookies);
      buttons.closeWarning.addEventListener('click', handleCloseWarning);
      buttons.cancelUsername.addEventListener('click', handleCancelUsername);
      buttons.saveUsername.addEventListener('click', handleSaveUsername);
    };

    init(); // Appelle la fonction d'initialisation pour démarrer l'application
});