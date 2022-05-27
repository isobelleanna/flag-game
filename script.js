const countriesArr = [
    {
        country : "bangladesh",
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
        continent: "asia"
    },
     {
        country : "barbados",
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
        continent: "Americas"
    },
    {
        country : "belarus",
        flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
        continent: "europe"
    },
    {
        country : "belgium",
        flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",
        continent: "europe"
    }
];

//----------------------------------------------Variables------------------------------------------------------------------
const refreshButton = document.getElementById("refresh");
const imgContainer = document.querySelector(".game__img-container");
const countryForm = document.querySelector("#country-form");
const countryInput = document.getElementById("country-input");
const allGuessHeadings = document.querySelectorAll(".game__main--h2");
const correctHeadings = document.querySelectorAll(".game__main--h3")
const firstGuess = document.querySelector(".game__main--h2-1");
const secondGuess = document.querySelector(".game__main--h2-2");
const thirdGuess = document.querySelector(".game__main--h2-3");
const fourthGuess = document.querySelector(".game__main--h2-4");
const fifthGuess = document.querySelector(".game__main--h2-5");
const sixthGuess = document.querySelector(".game__main--h2-6");
let isFirstGuess = false;
let isSecondGuess = false;
let isThirdGuess = false;
let isFourthGuess = false;
let isFifthGuess = false;
let isSixthGuess = false;
let correctAnswer = "";

//----------------------------------------------Random------------------------------------------------------------------
const generateRandom = () =>  {
     return Math.floor(Math.random() * 4)
}

//----------------------------------------------New Flag------------------------------------------------------------------
const createNewFlag = (array) => {
    let random = generateRandom();
    correctAnswer = `${array[random].country}`
    return (
        `<img
           id="flag-img"
           class="game__main--img"
           src=${array[random].flag}
           alt=${array[random].country}
         />`
 )
}
imgContainer.innerHTML = createNewFlag(countriesArr);

//----------------------------------------------Refresh------------------------------------------------------------------
const onClickRefresh = (event) => {
    let random = generateRandom();
    correctAnswer = countriesArr[random].country;
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
           src=${countriesArr[random].flag}
           alt=${countriesArr[random].country}
         />`

    
}

//----------------------------------------------Submit Country Form----------------------------------------------------------------------
const onSubmitCountryForm = (event) => {
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
}

//----------------------------------------------Is There a match---------------------------------------------------------------------
const isItAMatch = (string) => {
    string === correctAnswer ? alert("Correct"): console.log("Incorrect");
}

//----------------------------------------------Event Listeners------------------------------------------------------------------
refreshButton.addEventListener('click', onClickRefresh)
countryForm.addEventListener('submit', onSubmitCountryForm)

