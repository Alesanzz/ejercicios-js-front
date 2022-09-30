const buscar = document.querySelector("#buscar");
const info = document.querySelector(".info");


buscar.addEventListener("keydown", function (event) {
  let li = document.createElement("li");
  if (event.key === "Enter") {
    if (event.target.value !== "") {
      li.innerHTML = event.target.value;
      info.appendChild(li);
    }
  }
});