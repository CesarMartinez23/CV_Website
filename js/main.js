const changeColor = document.getElementById("changeColor");
const section = document.getElementById("ejercicio");
const colors = ["blue", "pink", "violet", "red", "skyblue", "green", "white"]

changeColor.addEventListener("click", () => {
  const colorIndex = parseInt(Math.random()*colors.length)

  section.style.backgroundColor = colors[colorIndex]
  section.style.color = "black";

  changeColor.style.backgroundColor = "black";
  changeColor.style.color = "white";
});
