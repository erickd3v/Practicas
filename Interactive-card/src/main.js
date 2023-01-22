        // Extracción de los ID
const inputName = document.querySelector('#input-name');
const inputNumber = document.querySelector('#input-number');
const inputMonth = document.querySelector('#input-Month');
const inputYear = document.querySelector('#input-Year');
const inputCVC = document.querySelector('#input-CVC');
const cardNumber = document.querySelector('#card-number');
const cardName = document.querySelector('#card-name');
const cardMoth = document.querySelector('#card-month');
const cardYear = document.querySelector('#card-year');
const cardCVC = document.querySelector('#card-cvc');
const form = document.querySelector('#form');
const thanks = document.querySelector('#thanks');
const continues = document.querySelector('#continue');


    // Creamos una lista de eventos para el CARDHOLDER NAME

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Applessed";
    }
});

var cleaveCreditCard = new Cleave('#input-number', {
    creditCard: true
});

    // Lita de eventos para el CARD NUMBER

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;

    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
    }
});

    // Lista de eventos para el MES y AÑO de la card
var cleaveDate = new Cleave('#input-Month', {
    date: true,
    datePattern: ['m']
});

inputMonth.addEventListener("input", () => {
    cardMoth.innerText = inputMonth.value;

    if (inputMonth.value.length === 0) {
        cardMoth.innerText = "00";
    }
});

var cleaveDate = new Cleave('#input-Year', {
    date: true,
    datePattern: ['y']
});

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value;

    if (inputYear.value.length === 0) {
        cardYear.innerText = "00";
    }
});

    // Lista de eventos para el CVC

new Cleave('#input-CVC', {
    numericOnly: true,
    blocks: [3]
});

inputCVC.addEventListener("input", () => {
    cardCVC.innerText = inputCVC.value;

    if (inputCVC.value.length === 0) {
        cardCVC.innerText = "000";
    }
});

        // Lista de Eventos para el boton Confirmar y continuar

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    thanks.classList.remove("disabled");
});

    // Regresando al HTML inicial con otra lista de eventos

continues.addEventListener('click', () => {
    form.classList.remove("disabled");
    thanks.classList.add("disabled");
    cardName.innerText = "Jane Applessed";
    cardNumber.innerText = "0000 0000 0000 0000";
    cardMoth.innerText = "00";
    cardYear.innerText = "00";
    cardCVC.innerText = "000";
    form.reset();
});