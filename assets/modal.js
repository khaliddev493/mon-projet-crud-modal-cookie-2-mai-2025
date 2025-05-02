const modal = document.getElementById("monModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
  
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

