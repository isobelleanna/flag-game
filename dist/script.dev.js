"use strict";

var countriesArr = [{
  country: "bangladesh",
  flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
  continent: "asia"
}, {
  country: "barbados",
  flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
  continent: "Americas"
}, {
  country: "belarus",
  flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
  continent: "europe"
}, {
  country: "belgium",
  flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",
  continent: "europe"
}]; //----------------------------------------------Variables------------------------------------------------------------------

var refreshButton = document.getElementById("refresh");
var imgContainer = document.querySelector(".game__img-container");
var countryForm = document.querySelector("#country-form");
var countryInput = document.getElementById("country-input");
var allGuessHeadings = document.querySelectorAll(".game__main--h2");
var correctHeadings = document.querySelectorAll(".game__main--h3");
var firstGuess = document.querySelector(".game__main--h2-1");
var secondGuess = document.querySelector(".game__main--h2-2");
var thirdGuess = document.querySelector(".game__main--h2-3");
var fourthGuess = document.querySelector(".game__main--h2-4");
var fifthGuess = document.querySelector(".game__main--h2-5");
var sixthGuess = document.querySelector(".game__main--h2-6");
var isFirstGuess = false;
var isSecondGuess = false;
var isThirdGuess = false;
var isFourthGuess = false;
var isFifthGuess = false;
var isSixthGuess = false;
var correctAnswer = ""; //----------------------------------------------Random------------------------------------------------------------------

var generateRandom = function generateRandom() {
  return Math.floor(Math.random() * 4);
}; //----------------------------------------------New Flag------------------------------------------------------------------


var createNewFlag = function createNewFlag(array) {
  var random = generateRandom();
  correctAnswer = "".concat(array[random].country);
  return "<img\n           id=\"flag-img\"\n           class=\"game__main--img\"\n           src=".concat(array[random].flag, "\n           alt=").concat(array[random].country, "\n         />");
};

imgContainer.innerHTML = createNewFlag(countriesArr); //----------------------------------------------Refresh------------------------------------------------------------------

var onClickRefresh = function onClickRefresh(event) {
  var random = generateRandom();
  correctAnswer = countriesArr[random].country;
  allGuessHeadings.forEach(function (guess) {
    guess.innerText = "";
  });
  countryInput.innerText = "";
  isFirstGuess = false;
  isSecondGuess = false;
  isThirdGuess = false;
  isFourthGuess = false;
  isFifthGuess = false;
  isSixthGuess = false;
  imgContainer.innerHTML = "<img\n           id=\"flag-img\"\n           class=\"game__main--img\"\n           src=".concat(countriesArr[random].flag, "\n           alt=").concat(countriesArr[random].country, "\n         />");
}; //----------------------------------------------Submit Country Form----------------------------------------------------------------------


var onSubmitCountryForm = function onSubmitCountryForm(event) {
  event.preventDefault();
  countryInput.innerText = "";

  if (isFirstGuess === false) {
    firstGuess.innerText = event.target[0].value;
    isFirstGuess = true;
    isItAMatch(event.target[0].value);
    return;
  }

  if (isSecondGuess === false) {
    secondGuess.innerText = event.target[0].value;
    isSecondGuess = true;
    isItAMatch(event.target[0].value);
    return;
  }

  if (isThirdGuess === false) {
    thirdGuess.innerText = event.target[0].value;
    isThirdGuess = true;
    isItAMatch(event.target[0].value);
    return;
  }

  if (isFourthGuess === false) {
    fourthGuess.innerText = event.target[0].value;
    isFourthGuess = true;
    isItAMatch(event.target[0].value);
    return;
  }

  if (isFifthGuess === false) {
    fifthGuess.innerText = event.target[0].value;
    isFifthGuess = true;
    isItAMatch(event.target[0].value);
    return;
  }

  if (isSixthGuess === false) {
    sixthGuess.innerText = event.target[0].value;
    isSixthGuess = true;
    isItAMatch(event.target[0].value);
    return;
  }
}; //----------------------------------------------Is There a match---------------------------------------------------------------------


var isItAMatch = function isItAMatch(string) {
  string === correctAnswer ? alert("Correct") : console.log("Incorrect");
}; //----------------------------------------------Event Listeners------------------------------------------------------------------


refreshButton.addEventListener('click', onClickRefresh);
countryForm.addEventListener('submit', onSubmitCountryForm);