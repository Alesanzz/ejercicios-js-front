const palabra = "secreto"

let estado = 0

window.addEventListener("keypress", function(event){
    let key = event.key
    
    if (key === palabra[estado]){
        console.log(key)
        estado += 1
        console.log(estado)
    }else{
        this.alert("No es la letra correcta, vuelve a intentar de nuevo")
        estado = 0
    }

    if (estado == palabra.length) {
        this.alert("Enhorabuena, encontraste la palabra")
    }
})