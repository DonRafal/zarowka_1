import "./style.css";

const bulb = document.querySelector(".bulb");
const input = document.getElementById("light-toggle");

input.addEventListener("click", () => {
  bulb.classList.toggle("bulb--on");
});
