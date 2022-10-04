let form = document.querySelector(".form1");
let input = document.querySelector("#name");
let lista = document.querySelector("#lista");
let mensaje = document.querySelector("#mensaje");

//Funcion para que al dejar de seleccionar un input... se agrege esa informacion en una lista de "li"
input.addEventListener("blur", function (event) {
  if (event.target.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = event.target.value;
    lista.appendChild(li);
    mensaje.innerHTML = ""
  }else{
    mensaje.innerHTML = "No puede quedar vacio este campo"
    mensaje.style.backgroundColor = "tomato"
    mensaje.style.color = "snow"
  }
});
