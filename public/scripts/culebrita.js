const cuad = document.querySelector("#cuad");

let arriba = 0;
let derecha = 0;

window.addEventListener("keypress", function (e) {
  switch (e.key) {
    case "w":
      let a = arriba - 20;
      cuad.style.top = parseInt(a) + "px";
      arriba = a;
      break;
    case "s":
      let b = arriba + 20;
      cuad.style.top = parseInt(b) + "px";
      arriba = b;
      break;
    case "a":
      let c = derecha - 20;
      cuad.style.left = parseInt(c) + "px";
      derecha = c;
      break;
    case "d":
      let d = derecha + 20;
      cuad.style.left = parseInt(d) + "px";
      derecha = d;
      break;
  }
});
