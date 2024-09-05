// Write your code here
const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector(".subtitle");

let count = 0;

const handleclick = () => {
  count++;

  let timeText;

  if (count === 1) {
    timeText = "time";
  } else {
    timeText = "times";
  }

  subtitle.textContent = `You've clicked the lights ${count} ${timeText}`;

  this.classList.toggle("active");
};

lightbulb1.addEventListener("click", handleclick);
lightbulb2.addEventListener("click", handleclick);
lightbulb3.addEventListener("click", handleclick);
