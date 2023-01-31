const changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", function () {
  let section = document.getElementById("ejercicio");
  section.style.backgroundColor = "skyblue";
  section.style.color = "black";
  changeColor.style.backgroundColor = "black";
  changeColor.style.color = "white";
});
