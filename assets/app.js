 

// // const Tableau = [1, 2, 3, 4, 5];
// // // EXO #1
// // // Doublez tout les nombres du tableau
// // const TableauDouble = Tableau.map((nombre) => nombre * 2);

// // console.log(TableauDouble); // [2, 4, 6, 8, 10]



// // // EXO #2
// // // filtrer un tableau pour ne garder que les nombres pairs

// // let pairs = Tableau.filter((nombre) => nombre % 2 === 0);

// // console.log(pairs); //  [2, 4, 6, 8, 10]

// // // filtrer un tableau pour ne garder que les nombres impairs
// // let impairs = Tableau.filter((nombre) => nombre % 1 === 0);
// //  console.log(impairs);  

// // // EXO #3
// // // transformer le tableau en une valeur simple, statique en recuperant la valeur max
// // const valeurMax = Math.max(...Tableau);

// // console.log(valeurMax);

// // // transformer le tableau en une valeur simple, statique en recuperant la valeur min
// // const valeurMin = Math.min(...Tableau);

// // console.log(valeurMin);
// // // EXO #4
// // // faire un addition de tout les elements du tableau
// // const somme = Tableau.reduce(
// //   (accumulateur, valeurActuelle) => accumulateur + valeurActuelle,
// //   0
// // );

// // console.log(somme); // Résultat : 55

// // // EXO #5
// // // trouver si un tableau contient un element impair

// // const contientImpair = Tableau.some(nombre => nombre % 2 !== 0);

// // console.log(contientImpair);







// // // const MonTableau = [1, 2, 3, 4, 5];

// // EXO #1
//    // Doublez tout les nombres du tableau

// // ! premiere méthode avec une boucle for (la plus classique avec une variable intermediaire i qui va de 0 à la longueur du tableau -1)
// // for (let i = 0; i < MonTableau.length; i++) {
// //     MonTableau[i] = MonTableau[i] * 2;
// // }
// // console.log(MonTableau); 

// // ! deuxieme méthode avec une boucle forEach
// // MonTableau.forEach((element, index, array) => {
// //     array[index] = element * 2;
// // });
// // console.log(MonTableau); 

// // ! troisieme méthode avec une boucle map (nouveau tableau, evite les effets de bords -le code fait ce qu'il doit faire sans modifier d'autres elements utilisant le tableau initial-)
// const MonTableauDouble = MonTableau.map(MonElementDeTableau => MonElementDeTableau * 2);
// console.log(MonTableauDouble); // [2, 4, 6, 8, 10]

// // EXO #2
//    // filtrer un tableau pour ne garder que les nombres pairs
//    // filtrer un tableau pour ne garder que les nombres impairs

// ! premiere méthode avec une boucle for (la plus classique avec une variable intermediaire i qui va de 0 à la longueur du tableau -1)
// let MonTableauPairs = [];
// let MonTableauImpairs = [];
// for (let i = 0; i < MonTableau.length; i++) {
//     if (MonTableau[i] % 2 === 0) {
//         MonTableauPairs.push(MonTableau[i]);
//     } else {
//         MonTableauImpairs.push(MonTableau[i]);
//     }
// }
// console.log(MonTableauPairs); // [2, 4]
// console.log(MonTableauImpairs); // [1, 3, 5]

// ! deuxieme méthode avec une boucle forEach
// let MonTableauPairs = [];
// let MonTableauImpairs = [];
// MonTableau.forEach((element) => {
//     if (element % 2 === 0) {
//         MonTableauPairs.push(element);
//     } else {
//         MonTableauImpairs.push(element);
//     }
// });
// console.log(MonTableauPairs); // [2, 4]
// console.log(MonTableauImpairs); // [1, 3, 5]

// // ! troisieme méthode avec une boucle filter (nouveau tableau, evite les effets de bords -le code fait ce qu'il doit faire sans modifier d'autres elements utilisant le tableau initial-)
// const MonTableauPairs = MonTableau.filter(MonElementDeTableau => MonElementDeTableau % 2 === 0);
// const MonTableauImpairs = MonTableau.filter(MonElementDeTableau => MonElementDeTableau % 2 !== 0);
// console.log(MonTableauPairs); // [2, 4]
// console.log(MonTableauImpairs); // [1, 3, 5]

// // EXO #3
//    // transformer le tableau en une valeur simple, statique en recuperant la valeur max
//    // transformer le tableau en une valeur simple, statique en recuperant la valeur min
// const maxTab = MonTableau.reduce((max, MonElementDeTableau) => Math.max(max, MonElementDeTableau));
// const minTab = MonTableau.reduce((min, MonElementDeTableau) => Math.min(min, MonElementDeTableau));
// console.log(maxTab,"||", minTab); // 5 || 1

// // EXO #4
//    // faire un addition de tout les elements du tableau
//    // faire une multiplication de tout les elements du tableau
// const additionTab = MonTableau.reduce((accuElem, elem) => accuElem + elem, 0);
// const multiplicationTab = MonTableau.reduce((accuElem, elem) => accuElem * elem, 1);
// console.log(additionTab,"||", multiplicationTab); // 15 || 120

// // EXO #5
//    // trouver si un tableau contient un element impair
// const estValeurImpair = MonTableau.filter(MonElementDeTableau => MonElementDeTableau % 2 !== 0).length > 0;
// // methode reduce en comparant les elements deux à deux
// const estValeurImpairR = MonTableau.reduce((accuElem, elem) => accuElem || (elem % 2 !== 0), false);
// console.log(estValeurImpair); // true
// console.log(estValeurImpairR); // true





