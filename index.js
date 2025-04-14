const btnDOM = document.getElementById("btn");
const heightDOM = document.querySelector(".input");
const weightDOM = document.getElementById("weight");
const resultDOM = document.getElementById("bmi-result");
const conditionDOM = document.getElementById("weight-condition");

btnDOM.addEventListener("click", () => {
  const BMI = (weightDOM.value / (heightDOM.value / 100) ** 2).toFixed(1);
  resultDOM.value = BMI;

  if (BMI >= 30) {
    conditionDOM.innerText = "obesity";
  }
  if (BMI < 29.9) {
    conditionDOM.innerText = "overweight";
  }
  if (BMI < 24.9) {
    conditionDOM.innerText = "normal weight";
  }
  if (BMI < 18.5) {
    conditionDOM.innerText = "underweight";
  }
});