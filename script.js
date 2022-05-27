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

console.log(countriesArr[0]);
//----------------------------------------------Variables------------------------------------------------------------------
const flagImg = document.getElementById("flag-img");
const refreshButton = document.getElementById("refresh");
const imgContainer = document.querySelector(".game__img-container");
const countryForm = document.querySelector("#country-form");
const countryInput = document.getElementById("country-input");
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

//----------------------------------------------Random------------------------------------------------------------------
const generateRandom = () =>  {
     return Math.floor(Math.random() * 4)
}

//----------------------------------------------New Flag------------------------------------------------------------------
const createNewFlag = (array) => {
    let random = generateRandom();
    console.log(array[random].flag)
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
    console.log(random);
    console.log(countriesArr[random]);
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
    console.log(event)
    console.log(event.target[0].value)
    if (isFirstGuess === false) {
        firstGuess.innerText = event.target[0].value;
        isFirstGuess = true;
        return;
    }
    if (isSecondGuess === false) {
        secondGuess.innerText = event.target[0].value;
        isSecondGuess = true;
        return;
    }
    if (isThirdGuess === false) {
        thirdGuess.innerText = event.target[0].value;
        isThirdGuess = true;
        return;
    }
    if (isFourthGuess === false) {
        fourthGuess.innerText = event.target[0].value;
        isFourthGuess = true;
        return;
    }
    if (isFifthGuess === false) {
        fifthGuess.innerText = event.target[0].value;
        isFifthGuess = true;
        return;
    }
    if (isSixthGuess === false) {
        sixthGuess.innerText = event.target[0].value;
        isSixthGuess = true;
        return;
    }
}

//----------------------------------------------Event Listeners------------------------------------------------------------------
refreshButton.addEventListener('click', onClickRefresh)
countryForm.addEventListener('submit', onSubmitCountryForm)

