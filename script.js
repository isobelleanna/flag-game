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
let isFirstGuess = false;
let isSecondGuess = false;
let isThirdGuess = false;
let isFourthGuess = false;
let isFifthGuess = false;
let isSixthGuess = false;
let correctCountry = "";
let correctContinent = "";
let userGuessesArr = [];
let countryIdPlayed = [];
let index = 0;
let score = 0;
let randomCountryId = 0;

//----------------------------------------------Generate an array of numbers------------------------------------------------------------------
const generateAnArrayOfNumber = () => {
    for (let i = 1; i < countriesArr.length; i++) {
        countryIdPlayed.push(i)
    }
}
generateAnArrayOfNumber()

const selectCountryId = () => {
    if (countryIdPlayed.length === 0){
        alert("You have played every country")
    }
    console.log(countryIdPlayed)
    index = Math.floor(Math.random() * countryIdPlayed.length)
    console.log(index)
    randomCountryId = countryIdPlayed[index]
}

const removedCountryIdPlayed = () => {
    selectCountryId();
    countryIdPlayed.splice(index, 1)
    return countryIdPlayed
}


//----------------------------------------------Random------------------------------------------------------------------
const generateRandom = () =>  {
     return Math.floor(Math.random() * countriesArr.length)
}

const hasCountryBeenPlayed = () => {
    if (countryIdPlayed.length === countriesArr.length) {
        console.log("finished")
        return
    }
    let random = generateRandom();
    countryIdPlayed.push(random);
    console.log(countryIdPlayed);
    while(countryIdPlayed.includes(random)){
        random += 1;
    }
    
}
//----------------------------------------------Generate Option List------------------------------------------------------------------
countriesArr.forEach(countryObj => {
    countryDatalist.innerHTML += `<option class="options" value=${countryObj.country}>${countryObj.country}</option>`
});
const countryOptions = document.querySelectorAll(".options");

//----------------------------------------------New Flag------------------------------------------------------------------
const createNewFlag = (array) => {
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
    removedCountryIdPlayed()
    console.log(countryIdPlayed)
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
    countryInput.disabled = true
    alert(`The correct answer is .... ${correctCountry}`)

}
//----------------------------------------------Is The Continent a Match------------------------------------------------------------------
const itsAContinentMatch = (string) => {
    let obj = countriesArr.find(obj => obj.country === string);
    let userContinent = obj.continent;
    if (isFirstGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[0].innerText = "Continent: ✅": correctContinentHeading[0].innerText = "Continent: ❌";
        isFirstGuess = true;
        return;
    }if (isSecondGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[1].innerText = "Continent: ✅": correctContinentHeading[1].innerText = "Continent: ❌";
        isSecondGuess = true;
        return
    }if (isThirdGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[2].innerText = "Continent: ✅": correctContinentHeading[2].innerText = "Continent: ❌";
        isThirdGuess = true;
        return
    }if (isFourthGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[3].innerText = "Continent: ✅": correctContinentHeading[3].innerText = "Continent: ❌";
        isFourthGuess = true;
        return
    }if (isFifthGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[4].innerText = "Continent: ✅": correctContinentHeading[4].innerText = "Continent: ❌";
        isFifthGuess = true;
        return
    }if (isSixthGuess === false) {
        correctContinent === userContinent ? correctContinentHeading[5].innerText = "Continent: ✅": correctContinentHeading[5].innerText = "Continent: ❌";
        isSixthGuess = true;
    }
}

//----------------------------------------------Event Listeners------------------------------------------------------------------
refreshButton.addEventListener('click', onClickStartNewGame)
countryForm.addEventListener('submit', onSubmitCountryForm)
continueGameButton.addEventListener("click", onClickRefresh)

