let form = document.querySelector("#form")
let input = document.querySelector("#input")
let mensaje = document.querySelector("#mensaje")

//funcion para validar que en un formulario se carge unicamente archivos de imagenes, y mas ningun otro tipo de archivos
input.addEventListener("change", function(e){
    let extension = input.files[0].type
    console.log (extension)

    if (!extension.includes("image")){
        mensaje.innerHTML = "Debe corregir el archivo, ya que no es una imagen"
        mensaje.style.backgroundColor = "tomato"
        mensaje.style.color = "snow"
        input.value = null
    } else {
        mensaje.innerHTML = ""
    }

})

