let contador = document.querySelector("#contador")
let suma = document.querySelector("#suma")
let resta = document.querySelector("#resta")
let reset = document.querySelector('#reset')


suma.addEventListener("click", function(){
    let conta = parseInt(contador.innerHTML) 
    contador.innerHTML = conta + 1
})

resta.addEventListener("click", function(){
    let conta = parseInt(contador.innerHTML) 
    contador.innerHTML = conta - 1
})

reset.addEventListener("click", function(){
    contador.innerHTML = 0
})