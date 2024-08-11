/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/* controlling DOM Elements */
const toConvert = document.getElementById("conversion-unit");
const convertBtn = document.getElementById("conversion-button");
const lengthPara = document.getElementById("length-conversion");
const volumePara = document.getElementById("volume-conversion");
const massPara = document.getElementById("mass-conversion");

/* event listener that will take in input value and will run functions for calculations and pass entered amount as an argument to the functions */

convertBtn.addEventListener("click", function () {
  let unit = parseFloat(toConvert.value);

  length(unit);
  volume(unit);
  mass(unit);
});

/* Calculation functions that will take an amount parameter  */

function length(amount) {
  let metreToFeet = (amount * 3.281).toFixed(3);
  let feetToMetre = (amount / 3.281).toFixed(3);
  let metresFeet = `${amount} meters = ${metreToFeet} feet | ${amount} feet = ${feetToMetre} meters`;

  lengthPara.textContent = metresFeet;
}

function volume(amount) {
  let litresToGallons = (amount * 0.264).toFixed(3);
  let gallonsToLitres = (amount / 0.264).toFixed(3);
  let litresGallons = `${amount} litres = ${litresToGallons} gallons | ${amount} gallons = ${gallonsToLitres} litres`;

  volumePara.textContent = litresGallons;
}

function mass(amount) {
  let kilosToPounds = (amount * 2.204).toFixed(3);
  let poundsToKilos = (amount / 2.204).toFixed(3);
  let kiloPounds = `${amount} kilos = ${kilosToPounds} pounds | ${amount} pounds = ${poundsToKilos} kilos`;

  massPara.textContent = kiloPounds;
}
