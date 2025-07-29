const inputEl = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-converter");
const volumeEl = document.getElementById("volume-converter");
const massEl = document.getElementById("mass-converter");

convertBtn.addEventListener("click", function () {
  const value = Number(inputEl.value);

  const metersToFeet = (value * 3.281).toFixed(3);
  const feetToMeters = (value / 3.281).toFixed(3);

  const litersToGallons = (value * 0.264).toFixed(3);
  const gallonsToLiters = (value / 0.264).toFixed(3);

  const kilosToPounds = (value * 2.204).toFixed(3);
  const poundsToKilos = (value / 2.204).toFixed(3);

  lengthEl.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
  volumeEl.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
  massEl.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
});
