let divVisible = document.querySelector(".visible")
let divOculto = document.querySelector(".oculto")

divVisible.addEventListener("click", function(event){
    divOculto.classList.toggle("visibleNuevo")
})