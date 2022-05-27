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
const imgContainer = document.querySelector(".container__img");
const countryForm = document.querySelector("#country-form");
const countryInput = document.getElementById("country-input");

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
           class="container__main--img"
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
           class="container__main--img"
           src=${countriesArr[random].flag}
           alt=${countriesArr[random].country}
         />`
}

//----------------------------------------------Event Listeners------------------------------------------------------------------
refreshButton.addEventListener('click', onClickRefresh)