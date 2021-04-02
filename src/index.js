import validator from './validator.js';

let button = document.getElementsByClassName('buttonSecondPage');
let creditCardNumber = document.getElementById('dnumber').value;

// Función que muestra la segunda página cuando cliquean el botón Reservar:
document.getElementById('button-first-page').addEventListener('click', function(){
    document.getElementById('first-page').hidden = true;
    document.getElementById('second-page').hidden = false;
});

// Oculta la tercera página cuando cliquean el botón Reservar: 
button[0].addEventListener('click', function(){
    document.getElementById('second-page').hidden = true;
    document.getElementById('third-page').hidden = false; 
});

button[1].addEventListener('click', function(){
    document.getElementById('second-page').hidden = true;
    document.getElementById('third-page').hidden = false; 
});

// Función del botón Return de la tercera página:
document.getElementById('return').addEventListener('click', function(){
    document.getElementById('first-page').hidden = true;
    document.getElementById('second-page').hidden = false;
    document.getElementById('third-page').hidden = true;

});

//Función del botón Reservar de la cuarta página:


// Función que lee lo que pasa en el Input de Tarjeta de crédito:
document.getElementById('dnumber').addEventListener('input', function(event) {
    const inputDnumber = event.target.value;

     if (creditCardNumber.length < inputDnumber.length) {
        creditCardNumber += inputDnumber.slice(-1);
    }else{
        creditCardNumber = creditCardNumber.slice(0,-1) ;
    }
    
    let convertedNumber = validator.maskify(creditCardNumber);
    document.getElementById('dnumber').value=convertedNumber;
});


document.getElementById('confirm').addEventListener('click', function() {
    let validatedNumber = validator.isValid(creditCardNumber);
    if (validatedNumber== true) {
        document.getElementById('third-page').hidden = true;
        document.getElementById('fourth-page').hidden = false; 
    } else {
        alert ('Su tarjeta es inválida, por favor verifíquela');
    }    
});


