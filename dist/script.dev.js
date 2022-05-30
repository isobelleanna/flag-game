"use strict";

var countriesArr = [{
  country: "bangladesh",
  flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
  continent: "asia"
}, {
  country: "barbados",
  flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
  continent: "americas"
}, {
  country: "belarus",
  flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
  continent: "europe"
}, {
  country: "belgium",
  flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",
  continent: "europe"
}, {
  country: "belize",
  flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
  continent: "americas"
}, {
  country: "benin",
  flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
  continent: "africa"
}, {
  country: "bhutan",
  flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
  continent: "asia"
}, {
  country: "bolivia",
  flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg",
  continent: "americas"
}]; //----------------------------------------------Variables------------------------------------------------------------------

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
var correctContinent = ""; //----------------------------------------------Random------------------------------------------------------------------

var generateRandom = function generateRandom() {
  return Math.floor(Math.random() * 4);
}; //----------------------------------------------Generate Option List------------------------------------------------------------------


countriesArr.forEach(function (countryobj) {
  countryDatalist.innerHTML += "<option value=".concat(countryobj.country, ">").concat(countryobj.country, "</option>");
}); //----------------------------------------------New Flag------------------------------------------------------------------

var createNewFlag = function createNewFlag(array) {
  var random = generateRandom();
  correctCountry = "".concat(array[random].country);
  correctContinent = "".concat(array[random].continent);
  return "<img\n           id=\"flag-img\"\n           class=\"game__main--img\"\n           src=".concat(array[random].flag, "\n           alt=").concat(array[random].country, "\n         />");
};

imgContainer.innerHTML = createNewFlag(countriesArr); //----------------------------------------------Refresh------------------------------------------------------------------

var onClickRefresh = function onClickRefresh(event) {
  var random = generateRandom();
  correctCountry = countriesArr[random].country;
  correctContinent = countriesArr[random].continent;
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
  correctHeadings.forEach(function (heading) {
    heading.innerText = "";
  });
  countryInput.disabled = false;
  correctContinentHeading.forEach(function (heading) {
    heading.innerText = "";
  });
  errorParagraph.innerText = "";
}; //----------------------------------------------Submit Country Form----------------------------------------------------------------------


var onSubmitCountryForm = function onSubmitCountryForm(event) {
  event.preventDefault();
  var usersCountryInput = event.target[0].value;
  countryInput.value = "";

  if (usersCountryInput === "") {
    return;
  }

  var isFound = countriesArr.some(function (element) {
    return element.country === usersCountryInput ? true : false;
  });

  if (isFound === false) {
    errorParagraph.innerText = "Invalid Country, Please try again.";
    return;
  }

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
  var obj = countriesArr.find(function (obj) {
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