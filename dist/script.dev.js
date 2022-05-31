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
var continueGameButton = document.getElementById("continue-game");
var isFirstGuess = false;
var isSecondGuess = false;
var isThirdGuess = false;
var isFourthGuess = false;
var isFifthGuess = false;
var isSixthGuess = false;
var correctCountry = "";
var correctContinent = "";
var userGuessesArr = [];
var countryIdPlayed = [];
var index = 0;
var score = 0;
var randomCountryId = 0; //----------------------------------------------Generate an array of numbers------------------------------------------------------------------

var generateAnArrayOfNumber = function generateAnArrayOfNumber() {
  for (var i = 1; i < _countries["default"].length; i++) {
    countryIdPlayed.push(i);
  }
};

generateAnArrayOfNumber();

var selectCountryId = function selectCountryId() {
  if (countryIdPlayed.length === 0) {
    alert("You have played every country");
  }

  console.log(countryIdPlayed);
  index = Math.floor(Math.random() * countryIdPlayed.length);
  console.log(index);
  randomCountryId = countryIdPlayed[index];
};

var removedCountryIdPlayed = function removedCountryIdPlayed() {
  selectCountryId();
  countryIdPlayed.splice(index, 1);
  return countryIdPlayed;
}; //----------------------------------------------Random------------------------------------------------------------------


var generateRandom = function generateRandom() {
  return Math.floor(Math.random() * _countries["default"].length);
};

var hasCountryBeenPlayed = function hasCountryBeenPlayed() {
  if (countryIdPlayed.length === _countries["default"].length) {
    console.log("finished");
    return;
  }

  var random = generateRandom();
  countryIdPlayed.push(random);
  console.log(countryIdPlayed);

  while (countryIdPlayed.includes(random)) {
    random += 1;
  }
}; //----------------------------------------------Generate Option List------------------------------------------------------------------


_countries["default"].forEach(function (countryObj) {
  countryDatalist.innerHTML += "<option class=\"options\" value=".concat(countryObj.country, ">").concat(countryObj.country, "</option>");
});

var countryOptions = document.querySelectorAll(".options"); //----------------------------------------------New Flag------------------------------------------------------------------

var createNewFlag = function createNewFlag(array) {
  correctCountry = "".concat(array[randomCountryId].country);
  correctContinent = "".concat(array[randomCountryId].continent);
  return "<img\n           id=\"flag-img\"\n           class=\"game__main--img\"\n           src=".concat(array[randomCountryId].flag, "\n           alt=").concat(array[randomCountryId].country, "\n         />");
};

imgContainer.innerHTML = createNewFlag(_countries["default"]); //----------------------------------------------Refresh------------------------------------------------------------------

var onClickRefresh = function onClickRefresh(event) {
  correctCountry = _countries["default"][randomCountryId].country;
  correctContinent = _countries["default"][randomCountryId].continent;
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
  imgContainer.innerHTML = "<img\n           id=\"flag-img\"\n           class=\"game__main--img\"\n           src=".concat(_countries["default"][randomCountryId].flag, "\n           alt=").concat(_countries["default"][randomCountryId].country, "\n         />");
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
  removedCountryIdPlayed();
  console.log(countryIdPlayed);
}; //----------------------------------------------New Game------------------------------------------------------------------


var onClickStartNewGame = function onClickStartNewGame(event) {
  onClickRefresh();
  score = 0;
  countryIdPlayed = [];
  generateAnArrayOfNumber();
  selectCountryId();
  console.log(countryIdPlayed);
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

  var indexOfOptions = _countries["default"].findIndex(function (object) {
    return object.country === usersCountryInput;
  });

  countryOptions[indexOfOptions].disabled = true;

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
    score += 1;
    alert("Correct! Your current score is ".concat(score));
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


refreshButton.addEventListener('click', onClickStartNewGame);
countryForm.addEventListener('submit', onSubmitCountryForm);
continueGameButton.addEventListener("click", onClickRefresh);