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
var coordinatesSubheading = document.querySelectorAll(".game__main--coordinates-subheading");
var isFirstGuess = false;
var isSecondGuess = false;
var isThirdGuess = false;
var isFourthGuess = false;
var isFifthGuess = false;
var isSixthGuess = false;
var correctCountry = "";
var correctContinent = "";
var countryIdPlayed = [];
var index = 0;
var score = 0;
var randomCountryId = 0;
continueGameButton.disabled = true;
refreshButton.disabled = true; //----------------------------------------------Generate an array of numbers------------------------------------------------------------------

var generateAnArrayOfNumber = function generateAnArrayOfNumber() {
  for (var i = 0; i < _countries["default"].length; i++) {
    countryIdPlayed.push(i);
  }
};

generateAnArrayOfNumber();

var selectCountryId = function selectCountryId() {
  index = Math.floor(Math.random() * countryIdPlayed.length);
  randomCountryId = countryIdPlayed[index];
};

var removedCountryIdPlayed = function removedCountryIdPlayed() {
  return countryIdPlayed.splice(index, 1);
}; //----------------------------------------------Generate Option List------------------------------------------------------------------


_countries["default"].forEach(function (countryObj) {
  countryDatalist.innerHTML += "<option class=\"options\" value=".concat(countryObj.country, ">").concat(countryObj.country, "</option>");
});

var countryOptions = document.querySelectorAll(".options"); //----------------------------------------------New Flag------------------------------------------------------------------

var createNewFlag = function createNewFlag(array) {
  selectCountryId();
  removedCountryIdPlayed();
  correctCountry = "".concat(array[randomCountryId].country);
  correctContinent = "".concat(array[randomCountryId].continent);
  return "<img\n           id=\"flag-img\"\n           class=\"game__main--img\"\n           src=".concat(array[randomCountryId].flag, "\n           alt=").concat(array[randomCountryId].country, "\n         />");
};

imgContainer.innerHTML = createNewFlag(_countries["default"]); //----------------------------------------------Refresh------------------------------------------------------------------

var onClickRefresh = function onClickRefresh(event) {
  if (countryIdPlayed.length === 0) {
    continueGameButton.disabled = true;
    errorParagraph.innerText = "You have played every flag.";
    return;
  }

  selectCountryId();
  removedCountryIdPlayed();
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
  coordinatesSubheading.forEach(function (subheading) {
    subheading.innerText = "";
  });
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
    continueGameButton.disabled = false;
    refreshButton.disabled = false;
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

  continueGameButton.disabled = false;
  refreshButton.disabled = false;
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
    updateDistanceCalculationHeading(string);
    return;
  }

  if (isSecondGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[1].innerText = "Continent: ✅" : correctContinentHeading[1].innerText = "Continent: ❌";
    updateDistanceCalculationHeading(string);
    return;
  }

  if (isThirdGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[2].innerText = "Continent: ✅" : correctContinentHeading[2].innerText = "Continent: ❌";
    updateDistanceCalculationHeading(string);
    return;
  }

  if (isFourthGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[3].innerText = "Continent: ✅" : correctContinentHeading[3].innerText = "Continent: ❌";
    updateDistanceCalculationHeading(string);
    return;
  }

  if (isFifthGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[4].innerText = "Continent: ✅" : correctContinentHeading[4].innerText = "Continent: ❌";
    updateDistanceCalculationHeading(string);
    return;
  }

  if (isSixthGuess === false) {
    correctContinent === userContinent ? correctContinentHeading[5].innerText = "Continent: ✅" : correctContinentHeading[5].innerText = "Continent: ❌";
    updateDistanceCalculationHeading(string);
  }
}; //----------------------------------------------Distance from answers------------------------------------------------------------------


var distanceCalculation = function distanceCalculation(userLat, userLong, correctLat, correctLong) {
  var degreeToRadians = Math.PI / 180;
  var c = Math.cos;
  var value = 0.5 - c((correctLat - userLat) * degreeToRadians) / 2 + c(userLat * degreeToRadians) * c(correctLat * degreeToRadians) * (1 - c((correctLong - userLong) * degreeToRadians)) / 2;
  return Math.floor(12742 * Math.asin(Math.sqrt(value)));
};

var updateDistanceCalculationHeading = function updateDistanceCalculationHeading(string) {
  var obj = _countries["default"].find(function (obj) {
    return obj.country === string;
  });

  var correctObj = _countries["default"].find(function (obj) {
    return obj.country === correctCountry;
  });

  var userLat = obj.latutude;
  var userLong = obj.longitutue;
  var correctLat = correctObj.latutude;
  var correctLong = correctObj.longitutue;
  console.log(distanceCalculation(userLat, userLong, correctLat, correctLong));
  var distance = distanceCalculation(userLat, userLong, correctLat, correctLong);

  if (isFirstGuess === false) {
    coordinatesSubheading[0].innerText = distance + "km";
    isFirstGuess = true;
    return;
  }

  if (isSecondGuess === false) {
    coordinatesSubheading[1].innerText = distance + "km";
    isSecondGuess = true;
    return;
  }

  if (isThirdGuess === false) {
    coordinatesSubheading[2].innerText = distance + "km";
    isThirdGuess = true;
    return;
  }

  if (isFourthGuess === false) {
    coordinatesSubheading[3].innerText = distance + "km";
    isFourthGuess = true;
    return;
  }

  if (isFifthGuess === false) {
    coordinatesSubheading[4].innerText = distance + "km";
    isFifthGuess = true;
    return;
  }

  if (isSixthGuess === false) {
    coordinatesSubheading[0].innerText = distance + "km";
    isSixthGuess = true;
  }
}; //----------------------------------------------Event Listeners------------------------------------------------------------------


refreshButton.addEventListener('click', onClickStartNewGame);
countryForm.addEventListener('submit', onSubmitCountryForm);
continueGameButton.addEventListener("click", onClickRefresh);