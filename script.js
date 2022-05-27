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
const flagImg = document.getElementById("flag-img");
const refreshButton = document.getElementById("refresh");
const imgContainer = document.querySelector(".container__img");
const countryForm = document.querySelector("#country-form");
const countryInput = document.getElementById("country-input");

const generateRandom = () =>  {
     return Math.floor(Math.random() * 4)
}
console.log(generateRandom())
let random = generateRandom()

const createNewFlag = (array) => {
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

const onClickRefresh = (event) => {
    let random = generateRandom();
    console.log(random);
    console.log(countriesArr[random]);
}

refreshButton.addEventListener('click', onClickRefresh)