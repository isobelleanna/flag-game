import countriesArr from "./data/countries.js";
//----------------------------------------------Variables------------------------------------------------------------------
const refreshButton = document.getElementById("refresh");
const imgContainer = document.querySelector(".game__img-container");
const countryForm = document.querySelector("#country-form");
const countryInput = document.getElementById("country-input");
const allGuessHeadings = document.querySelectorAll(".game__main--h2");
const correctHeadings = document.querySelectorAll(".game__main--h3");
const correctContinentHeading = document.querySelectorAll(".game__main--h4");
const errorParagraph = document.querySelector(".game__p--error");
const countryDatalist = document.querySelector(".country-datalist");
const continueGameButton = document.getElementById("continue-game");
const coordinatesSubheading = document.querySelectorAll(".game__main--coordinates-subheading");
let isFirstGuess = false;
let isSecondGuess = false;
let isThirdGuess = false;
let isFourthGuess = false;
let isFifthGuess = false;
let isSixthGuess = false;
let correctCountry = "";
let correctContinent = "";
let countryIdPlayed = [];
let index = 0;
let score = 0;
let randomCountryId = 0;
//continueGameButton.disabled = true;
refreshButton.disabled = true;

//----------------------------------------------Generate an array of numbers------------------------------------------------------------------
const generateAnArrayOfNumber = () => {
    for (let i = 0; i < countriesArr.length; i++) {
        countryIdPlayed.push(i)
    }
}
generateAnArrayOfNumber()

const selectCountryId = () => {
    index = Math.floor(Math.random() * countryIdPlayed.length)
    randomCountryId = countryIdPlayed[index]
}

const removedCountryIdPlayed = () => {
     return countryIdPlayed.splice(index, 1)
}

//----------------------------------------------Generate Option List------------------------------------------------------------------
countriesArr.forEach(countryObj => {
    countryDatalist.innerHTML += `<option class="options" value=${countryObj.country}>${countryObj.country}</option>`
});
const countryOptions = document.querySelectorAll(".options");

//----------------------------------------------New Flag------------------------------------------------------------------
const createNewFlag = (array) => {
    selectCountryId()
    removedCountryIdPlayed()
    correctCountry = `${array[randomCountryId].country}`
    correctContinent = `${array[randomCountryId].continent}`
    return (
        `<img
           id="flag-img"
           class="game__main--img"
           src=${array[randomCountryId].flag}
           alt=${array[randomCountryId].country}
         />`
 )
}
imgContainer.innerHTML = createNewFlag(countriesArr);

//----------------------------------------------Refresh------------------------------------------------------------------
const onClickRefresh = (event) => {
    if (countryIdPlayed.length === 0){
        continueGameButton.disabled = true
        errorParagraph.innerText = "You have played every flag."
        return
    }
    selectCountryId()
    removedCountryIdPlayed()
    correctCountry = countriesArr[randomCountryId].country;
    correctContinent = countriesArr[randomCountryId].continent;
    allGuessHeadings.forEach(guess => {
        guess.innerText = "";
    });
    countryInput.innerText = "";
    isFirstGuess = false;
    isSecondGuess = false;
    isThirdGuess = false;
    isFourthGuess = false;
    isFifthGuess = false;
    isSixthGuess = false;
    imgContainer.innerHTML = `<img
           id="flag-img"
           class="game__main--img"
           src=${countriesArr[randomCountryId].flag}
           alt=${countriesArr[randomCountryId].country}
         />`
    correctHeadings.forEach(heading => {
        heading.innerText = ""
    });
    countryInput.disabled = false
    correctContinentHeading.forEach(heading => {
        heading.innerText = ""
    });
    errorParagraph.innerText = ""
    countryOptions.forEach(option => {
        option.disabled = false;
    });
    coordinatesSubheading.forEach(subheading => {
        subheading.innerText = ""
    });
}
//----------------------------------------------New Game------------------------------------------------------------------
const onClickStartNewGame = (event) => {
    onClickRefresh();
    score = 0;
    countryIdPlayed = []
    generateAnArrayOfNumber()
    selectCountryId()
    console.log(countryIdPlayed)
}

//----------------------------------------------Submit Country Form----------------------------------------------------------------------
const onSubmitCountryForm = (event) => {
    event.preventDefault();
    let usersCountryInput = event.target[0].value;
    countryInput.value = "";
    if(usersCountryInput === ""){return}
    const isFound = countriesArr.some(element => {
         return element.country === usersCountryInput ? true : false;
    })
    if(isFound === false){
        errorParagraph.innerText = "Invalid Country, Please try again."
        return
    }
    const indexOfOptions = countriesArr.findIndex(object => {
        return object.country === usersCountryInput;
    })
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
}

//----------------------------------------------Is The Country a Match---------------------------------------------------------------------
const isItAMatch = (string) => {
    if(string === correctCountry) {
        score += 1
        alert(`Correct! Your current score is ${score}`)
        countryInput.disabled = true
        continueGameButton.disabled = false;
        refreshButton.disabled = false;
    }
    if (isFirstGuess === false) {
        string === correctCountry ? correctHeadings[0].innerText = "✅": correctHeadings[0].innerText = "❌";
        itsAContinentMatch(string)
        return;
    }if (isSecondGuess === false) {
        string === correctCountry ? correctHeadings[1].innerText = "✅": correctHeadings[1].innerText = "❌";
        itsAContinentMatch(string)
        return
    }if (isThirdGuess === false) {
        string === correctCountry ? correctHeadings[2].innerText = "✅": correctHeadings[2].innerText = "❌";
        itsAContinentMatch(string)
        return
    }if (isFourthGuess === false) {
        string === correctCountry ? correctHeadings[3].innerText = "✅": correctHeadings[3].innerText = "❌";
        itsAContinentMatch(string)
        return
    }if (isFifthGuess === false) {
        string === correctCountry ? correctHeadings[4].innerText = "✅": correctHeadings[4].innerText = "❌";
        itsAContinentMatch(string)
        return
    }if (isSixthGuess === false) {
        string === correctCountry ? correctHeadings[5].innerText = "✅": correctHeadings[5].innerText = "❌";
        itsAContinentMatch(string)
    }
    continueGameButton.disabled = false;
    refreshButton.disabled = false;
    countryInput.disabled = true
    alert(`The correct answer is .... ${correctCountry}`)

}
//----------------------------------------------Is The Continent a Match------------------------------------------------------------------
const itsAContinentMatch = (string) => {
    let obj = countriesArr.find(obj => obj.country === string);
    let userContinent = obj.continent;
    if (isFirstGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[0].innerText = "Continent: ✅": correctContinentHeading[0].innerText = "Continent: ❌";
        updateDistanceCalculationHeading(string)
        return;
    }if (isSecondGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[1].innerText = "Continent: ✅": correctContinentHeading[1].innerText = "Continent: ❌";
        updateDistanceCalculationHeading(string)
        return
    }if (isThirdGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[2].innerText = "Continent: ✅": correctContinentHeading[2].innerText = "Continent: ❌";
        updateDistanceCalculationHeading(string)
        return
    }if (isFourthGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[3].innerText = "Continent: ✅": correctContinentHeading[3].innerText = "Continent: ❌"
        updateDistanceCalculationHeading(string)
        return
    }if (isFifthGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[4].innerText = "Continent: ✅": correctContinentHeading[4].innerText = "Continent: ❌";
        updateDistanceCalculationHeading(string)
        return
    }if (isSixthGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[5].innerText = "Continent: ✅": correctContinentHeading[5].innerText = "Continent: ❌";
        updateDistanceCalculationHeading(string)
    }
}
//----------------------------------------------Distance from answers------------------------------------------------------------------
const distanceCalculation = (userLat, userLong, correctLat, correctLong) => {
    const degreeToRadians = Math.PI / 180
    const c = Math.cos;
    const value = 0.5 - c((correctLat- userLat) * degreeToRadians)/ 2 +
    c(userLat * degreeToRadians) * c(correctLat * degreeToRadians) *
    (1-c((correctLong - userLong)* degreeToRadians))/2;
    return Math.floor(12742 * Math.asin(Math.sqrt(value)));
}

const updateDistanceCalculationHeading = (string) => {
    let obj = countriesArr.find(obj => obj.country === string);
    let correctObj = countriesArr.find(obj => obj.country === correctCountry)
    let userLat = obj.latitude;
    let userLong = obj.longitude;
    let correctLat = correctObj.latitude;
    let correctLong = correctObj.longitude;
    console.log(distanceCalculation(userLat, userLong, correctLat, correctLong))
    const distance = distanceCalculation(userLat, userLong, correctLat, correctLong)
    if (isFirstGuess === false) {
        coordinatesSubheading[0].innerText = distance + "km"
        isFirstGuess = true;
        return;
    }if (isSecondGuess === false) {
        coordinatesSubheading[1].innerText = distance + "km"
        isSecondGuess = true;
        return
    }if (isThirdGuess === false) {
        coordinatesSubheading[2].innerText = distance + "km"
        isThirdGuess = true;
        return
    }if (isFourthGuess === false) {
        coordinatesSubheading[3].innerText = distance + "km"
        isFourthGuess = true;
        return
    }if (isFifthGuess === false) {
        coordinatesSubheading[4].innerText = distance + "km"
        isFifthGuess = true;
        return
    }if (isSixthGuess === false) {
        coordinatesSubheading[0].innerText = distance + "km"
        isSixthGuess = true;
    }
}
//----------------------------------------------Event Listeners------------------------------------------------------------------
refreshButton.addEventListener('click', onClickStartNewGame)
countryForm.addEventListener('submit', onSubmitCountryForm)
continueGameButton.addEventListener("click", onClickRefresh)

