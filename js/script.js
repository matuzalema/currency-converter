let euro = 4.2669;

const input = document.querySelector(".input-converter");
const button = document.querySelector(".button-converter");
const plnField = document.querySelector(".pln");
const dateField = document.querySelector(".date");

button.addEventListener("click", function() {
  let inputValue = input.value;

  if (isNaN(inputValue) || inputValue === "") {
    alert("wpisz liczbę");
    return (input.value = "");
  } else {
    let plnAfterConvert = (inputValue / 4.2669).toFixed(4);
    plnFieldValue = plnAfterConvert + " PLN";

    let getTime = new Date();
    let currentMonth = getTime.getMonth();
    let currentDay = getTime.getDay();
    let currentHours = getTime.getHours();
    let currentMinutes = getTime.getMinutes();

    if (currentMonth < 10) {
      currentMonth = "0" + currentMonth;
    }
    if (currentDay < 10) {
      currentDay = "0" + currentDay;
    }
    if (currentHours < 10) {
      currentHours = "0" + currentHours;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    let date =
      getTime.getFullYear() +
      "." +
      currentMonth +
      "." +
      currentDay +
      " " +
      currentHours +
      ":" +
      currentMinutes;


    plnField.insertAdjacentHTML(
      "afterbegin",
      "<div class='value-field'>" + plnFieldValue + "</div> <p class='date-field'>" + date + "</p>"
    );

    console.log(date);
    input.value = "";
  }
});
