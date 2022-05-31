"use strict";

var _countries = _interopRequireDefault(require("./data/countries.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//----------------------------------------------Variables------------------------------------------------------------------
var refreshButton = document.getElementById("refresh");
var imgContainer = document.querySelector(".game__img-container");
var countryForm = document.querySelector("#country-form");
var countryInput = document.getElementById("country-input");
var allGuessHeadings = document.querySelectorAll(".game__main--h2");
var correctHeadings = document.querySelectorAll(".game__main--h3");
var correctContinentHeading = document.querySelectorAll(".game__main--h4");
var errorParagraph = document.querySelector(".game__p--error");
var countryDatalist = document.querySelector(".country-datalist");
var isFirstGuess = false;
var isSecondGuess = false;
var isThirdGuess = false;
var isFourthGuess = false;
var isFifthGuess = false;
var isSixthGuess = false;
var correctCountry = "";
var correctContinent = "";
var userGuessesArr = [];
var score = 0; //----------------------------------------------Random------------------------------------------------------------------

var generateRandom = function generateRandom() {
  return Math.floor(Math.random() * _countries["default"].length);
};

var hasCountryBeenPlayed = function hasCountryBeenPlayed() {
  console.log(1);
}; //----------------------------------------------Generate Option List------------------------------------------------------------------


_countries["default"].forEach(function (countryObj) {
  countryDatalist.innerHTML += "<option class=\"options\" value=".concat(countryObj.country, ">").concat(countryObj.country, "</option>");
});

var countryOptions = document.querySelectorAll(".options"); //----------------------------------------------New Flag------------------------------------------------------------------

var createNewFlag = function createNewFlag(array) {
  var random = generateRandom();
  correctCountry = "".concat(array[random].country);
  correctContinent = "".concat(array[random].continent);
  return "<img\n           id=\"flag-img\"\n           class=\"game__main--img\"\n           src=".concat(array[random].flag, "\n           alt=").concat(array[random].country, "\n         />");
};

imgContainer.innerHTML = createNewFlag(_countries["default"]); //----------------------------------------------Refresh------------------------------------------------------------------

var onClickRefresh = function onClickRefresh(event) {
  var random = generateRandom();
  correctCountry = _countries["default"][random].country;
  correctContinent = _countries["default"][random].continent;
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
  imgContainer.innerHTML = "<img\n           id=\"flag-img\"\n           class=\"game__main--img\"\n           src=".concat(_countries["default"][random].flag, "\n           alt=").concat(_countries["default"][random].country, "\n         />");
  correctHeadings.forEach(function (heading) {
    heading.innerText = "";
  });
  countryInput.disabled = false;
  correctContinentHeading.forEach(function (heading) {
    heading.innerText = "";
  });
  errorParagraph.innerText = "";
  countryOptions.forEach(function (option) {
    option.disabled = false;
  });
}; //----------------------------------------------Submit Country Form----------------------------------------------------------------------


var onSubmitCountryForm = function onSubmitCountryForm(event) {
  event.preventDefault();
  var usersCountryInput = event.target[0].value;
  countryInput.value = "";

  if (usersCountryInput === "") {
    return;
  }

  var isFound = _countries["default"].some(function (element) {
    return element.country === usersCountryInput ? true : false;
  });

  if (isFound === false) {
    errorParagraph.innerText = "Invalid Country, Please try again.";
    return;
  }

  var index = _countries["default"].findIndex(function (object) {
    return object.country === usersCountryInput;
  });

  countryOptions[index].disabled = true;

  if (isFirstGuess === false) {
    allGuessHeadings[0].innerText = usersCountryInput;
    isItAMatch(usersCountryInput);
    return;
  }

  if (isSecondGuess === false) {
    allGuessHeadings[1].innerText = usersCountryInput;
    isItAMatch(usersCountryInput);
    return;
  }

  if (isThirdGuess === false) {
    allGuessHeadings[2].innerText = usersCountryInput;
    isItAMatch(usersCountryInput);
    return;
  }

  if (isFourthGuess === false) {
    allGuessHeadings[3].innerText = usersCountryInput;
    isItAMatch(usersCountryInput);
    return;
  }

  if (isFifthGuess === false) {
    allGuessHeadings[4].innerText = usersCountryInput;
    isItAMatch(usersCountryInput);
    return;
  }

  if (isSixthGuess === false) {
    allGuessHeadings[5].innerText = usersCountryInput;
    isItAMatch(usersCountryInput);
    return;
  }
}; //----------------------------------------------Is The Country a Match---------------------------------------------------------------------


var isItAMatch = function isItAMatch(string) {
  if (string === correctCountry) {
    alert("Correct");
    countryInput.disabled = true;
  }

  if (isFirstGuess === false) {
    string === correctCountry ? correctHeadings[0].innerText = "✅" : correctHeadings[0].innerText = "❌";
    itsAContinentMatch(string);
    return;
  }

  if (isSecondGuess === false) {
    string === correctCountry ? correctHeadings[1].innerText = "✅" : correctHeadings[1].innerText = "❌";
    itsAContinentMatch(string);
    return;
  }

  if (isThirdGuess === false) {
    string === correctCountry ? correctHeadings[2].innerText = "✅" : correctHeadings[2].innerText = "❌";
    itsAContinentMatch(string);
    return;
  }

  if (isFourthGuess === false) {
    string === correctCountry ? correctHeadings[3].innerText = "✅" : correctHeadings[3].innerText = "❌";
    itsAContinentMatch(string);
    return;
  }

  if (isFifthGuess === false) {
    string === correctCountry ? correctHeadings[4].innerText = "✅" : correctHeadings[4].innerText = "❌";
    itsAContinentMatch(string);
    return;
  }

  if (isSixthGuess === false) {
    string === correctCountry ? correctHeadings[5].innerText = "✅" : correctHeadings[5].innerText = "❌";
    itsAContinentMatch(string);
  }

  countryInput.disabled = true;
  alert("The correct answer is .... ".concat(correctCountry));
}; //----------------------------------------------Is The Continent a Match------------------------------------------------------------------


var itsAContinentMatch = function itsAContinentMatch(string) {
  var obj = _countries["default"].find(function (obj) {
    return obj.country === string;
  });

  var userContinent = obj.continent;

  if (isFirstGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[0].innerText = "Continent: ✅" : correctContinentHeading[0].innerText = "Continent: ❌";
    isFirstGuess = true;
    return;
  }

  if (isSecondGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[1].innerText = "Continent: ✅" : correctContinentHeading[1].innerText = "Continent: ❌";
    isSecondGuess = true;
    return;
  }

  if (isThirdGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[2].innerText = "Continent: ✅" : correctContinentHeading[2].innerText = "Continent: ❌";
    isThirdGuess = true;
    return;
  }

  if (isFourthGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[3].innerText = "Continent: ✅" : correctContinentHeading[3].innerText = "Continent: ❌";
    isFourthGuess = true;
    return;
  }

  if (isFifthGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[4].innerText = "Continent: ✅" : correctContinentHeading[4].innerText = "Continent: ❌";
    isFifthGuess = true;
    return;
  }

  if (isSixthGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[5].innerText = "Continent: ✅" : correctContinentHeading[5].innerText = "Continent: ❌";
    isSixthGuess = true;
  }
}; //----------------------------------------------Event Listeners------------------------------------------------------------------


refreshButton.addEventListener('click', onClickRefresh);
countryForm.addEventListener('submit', onSubmitCountryForm);