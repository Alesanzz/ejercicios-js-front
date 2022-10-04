let form = document.querySelector("#form1")

//Funcion para evitar el comportamiento normal de un formulario (que seria enviar la informacion), para buscar que se hagan ciertas validaciones antes de enviar a back toda la informacion
form.addEventListener("submit", function(e){
    let correo = window.prompt("Cual es tu correo")
    let validacion = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!validacion.test(correo)){
        e.preventDefault()
        window.alert("Tienes que ingresar un correo valido")
    }
})