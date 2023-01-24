                // Extracción de los ID

        // CARDHOLDER NAME
let inputName = document.querySelector('#input-name');
let cardName = document.querySelector('#card-name');
let errorName = document.querySelector('.from__errorName--error');

        // CARD NUMBER
let inputNumber = document.querySelector('#input-number');
let cardNumber = document.querySelector('#card-number');
let errorNumber = document.querySelector('.from__errorNumber--error');

        // CARD MONTH
let inputMonth = document.querySelector('#input-Month');
let cardMoth = document.querySelector('#card-month');
let errorMonth = document.querySelector('.from__errorMonth--error');

        // CARD YEAR
let inputYear = document.querySelector('#input-Year');
let cardYear = document.querySelector('#card-year');
let errorYear = document.querySelector('.from__errorYear--error');

        // CARD CVC
let inputCVC = document.querySelector('#input-CVC');
let cardCVC = document.querySelector('#card-cvc');
let errorCVC = document.querySelector('.from__errorCVC--error');

        // FORM
let form = document.querySelector('#form');

        // Button ID
let confirmar = document.querySelector('#btn');
let thanks = document.querySelector('#thanks');
let continues = document.querySelector('#continue');


    // Ingreso dinamico del CARDHOLDER NAME

inputName.addEventListener("input", () => {
    if (inputName.value.length == '') {
        cardName.innerText = "Jane Applessed";
    } else {
        cardName.innerText = inputName.value
    }
});

    // Ingreso dinamico CARD NUMBER 

inputNumber.addEventListener("input", (e) => {
    let inputValue = e.target.value;

    // Actualizando graficamente la tarjeta:
    cardNumber.innerText = inputNumber.value;

    // Validando que haya una letra:
    if (validateLetters(inputNumber, errorNumber)) {
    } else {
        // agregando espacios cada 4 digitos, borrando espacios ingresados por el usario,
        inputNumber.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
    }

    // Mostrando los 0s por defecto cuando no se ha ingresado nada
    if (inputNumber.value == '') {
        cardNumber.innerText = '0000 0000 0000 0000';
    }
});

    // Ingreso Dinamico del MES y AÑO

inputMonth.addEventListener("input", () => {
    cardMoth.innerText = inputMonth.value;
    validateLetters(inputMonth, errorMonth);

    // Mostrando los 0s por defecto cuando no se ha ingresado nada
    if (inputMonth.value == '') {
        cardMoth.innerText = '00';
    }
});

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value;
    validateLetters(inputYear, errorYear);

    // Mostrando los 0s por defecto cuando no se ha ingresado nada
    if (inputYear.value == '') {
        cardYear.innerText = '00';
    }
});

    // Ingreso dinamico del CVC

inputCVC.addEventListener("input", () => {
    cardCVC.innerText = inputCVC.value;
    validateLetters(inputCVC, errorCVC);
    
    // Mostrando los 0s por defecto cuando no se ha ingresado nada
    if (inputCVC.value == '') {
        cardCVC.innerText = '000';
    }
});

            // Ingreso dinamico del boton Confirmar y continuar


let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false

        // Validando datos con el boton confirmar
confirmar.addEventListener('click', (e)=>{
    e.preventDefault();

    // validar Name
    if (verifyIsFilled(inputName, errorName)) {
        nameValidation = true;
    } else {
        nameValidation = false;
    }

    // Validar Numero
    if(verifyIsFilled(inputNumber, errorNumber)){
        if(inputNumber.value.length == 19){
            numberValidation = true;
        } else {
            showError(inputNumber, errorNumber, 'Wrong number');
            numberValidation = false;
        }
    }
    
    // Validar Mes
    if(verifyIsFilled(inputMonth, errorMonth)){
        if(parseInt(inputMonth.value)>0 && parseInt(inputMonth.value)<=12){
            monthValidation = true;
        } else {
            showError(inputMonth, errorMonth, 'Month incorrect');
            monthValidation = false;
        }
    }

    // Validar Año
    if (verifyIsFilled(inputYear, errorYear)){
        yearValidation = true;
    } else {
        yearValidation = false;
    }

    // Validar CVC
    if(verifyIsFilled(inputCVC, errorCVC)){
        if(inputCVC.value.length == 3){
            cvcValidation = true;
        } else {
            showError(inputCVC, errorCVC, 'Wrong CVC');
            cvcValidation = false;
        }
    }

    if (nameValidation == true && numberValidation == true && monthValidation == true && yearValidation == true && cvcValidation == true){
        form.classList.add("disabled");
        thanks.classList.remove("disabled");
    }

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
});

    // Funciones :

function showError(divInput, divError, msgError, show = true){
    if(show){
        divError.innerText = msgError;
        divInput.style.borderColor = '#FF0000';
    } else {
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }
}

function verifyIsFilled(divInput, divError){
    if(divInput.value.length> 0){
        showError(divInput, divError, "", false);
        return true;
    } else{
        showError(divInput, divError, "Can't be blank");
        return false; 
    }
}

function validateLetters(input, divError) {
    // Validando que haya una letra,
    let regExp = /[A-z]/g;
    if(regExp.test(input.value)) {
        showError(input, divError, 'Wrong format, numbers only');
    } else {
        showError(input, divError, '', false);
    }
}