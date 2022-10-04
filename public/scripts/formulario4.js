let mode = document.querySelector("#mode");
let titulo = document.querySelector("#titulo");
let parrafo = document.querySelector("#parrafo1");
let body = document.querySelector("body");

//Funcion para implementar el modo de navegacion claro/oscuro
mode.addEventListener("change", function (e) {
  if (e.target.value == "oscuro") {
    titulo.classList.add("oscuro");
    parrafo.classList.add("oscuro");
    body.classList.add("oscuro");
    mode.classList.add("oscuro");

  } else if (e.target.value == "claro") {
    titulo.classList.remove("oscuro");
    parrafo.classList.remove("oscuro");
    body.classList.remove("oscuro");
    mode.classList.remove("oscuro");
  }
});
