// Define all html ids
// First Div
const hourlyRate = document.getElementById("hourlyRate");
const hoursPerWeek = document.getElementById("hoursPerWeek");
const accomodationCost = document.getElementById("accomodationCost");
const foodCost = document.getElementById("foodCost");
const miscCost = document.getElementById("miscCost");
// Second Div
const earningsPerMonth = document.getElementById("earningsPerMonth");
const earningsPerYear = document.getElementById("earningsPerYear");
const expensePerMonth = document.getElementById("expensePerMonth");
const savingsPerMonth = document.getElementById("savingsPerMonth");
const savingsPerYear = document.getElementById("savingsPerYear");
// Extras
const taxPerYear = document.getElementById("taxPerYear");
const netSavingsPerYear = document.getElementById("netSavingsPerYear");

// Eventlistners

const btnClick = document.getElementById("calcBtn");
btnClick.addEventListener("click", () => {
  earningsPerMonth.value = hourlyRate.value * hoursPerWeek.value * 4;
  earningsPerYear.value = earningsPerMonth.value * 12;
  expensePerMonth.value = +accomodationCost.value + +foodCost.value + +miscCost.value;
  savingsPerMonth.value = earningsPerMonth.value - expensePerMonth.value;
  savingsPerYear.value = savingsPerMonth.value * 12;
  if (earningsPerYear.value == 0) {
    taxPerYear.value = 0;
  } else if (earningsPerYear.value <= 30840) {
    taxPerYear.value = 0;
  } else if (earningsPerYear >= 1935552) {
    taxPerYear.value = ((earningsPerYear.value - 30840) * 23) / 100;
  } else {
    taxPerYear.value = ((earningsPerYear.value - 30840) * 15) / 100;
  }
  netSavingsPerYear.value = savingsPerYear.value - taxPerYear.value;
});
