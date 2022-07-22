// DOM Elements For The Form Validation Fields
const form               = document.getElementById('form');
const firstName          = document.getElementById('first').value;
const lastName           = document.getElementById('last').value;
const email              = document.getElementById('email').value;
const quantityTournament = document.getElementById('quantity');
const localities         = document.getElementById('localities');
const locations          = document.querySelectorAll('#localities .checkbox-input');
const checkbox1          = document.getElementById('checkbox1');
const inputControl       = document.getElementsByClassName('text-control');
const pattern            = /^[a-zA-Z\-]+$/;

// CHECK FIRST NAME COMPLIANCE
function checkFirstName() {
    let firstError = document.getElementById('first-error');

    if(firstName.trim().length < 2 && !lastName.trim().match(pattern)){
        firstError.style.display = 'block';
        firstError.innerHTML     = 'Veuillez saisir au minimum 2 caractères !';
        setTimeout(function(){
            firstError.style.display ='none';
        }, 4500);
        return false;
    } 
    firstError.innerHTML = '';
    return true;
}

// CHECK LAST NAME COMPLIANCE
function checkName() {
    let nameError = document.getElementById('name-error');

    if(firstName.trim().length < 2 && !lastName.trim().match(pattern)) {
        nameError.style.display = 'block';
        nameError.innerHTML     = "⛔ pas de caractères spéciaux / alphanumérique";
        setTimeout(function(){
            nameError.style.display ='none';
        }, 4400);
        return false;
    }
    nameError.innerHTML = '';
    return true;
}
// CHECK EMAIL VALIDATION
function checkEmail() {
    let emailError    = document.getElementById('email-error');
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!email.trim().match(emailRegExp)) {
        emailError.style.display = 'block';
        emailError.innerHTML     = "format du email invalide !"
        setTimeout(function(){
            emailError.style.display ='none';
        }, 4300);
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

// CHECK BIRTH DATE VALIDATY
function checkBirthDate() {
    const birthDate     = document.getElementById('birthdate');
    let birthdateError  = document.getElementById('birthdate-error');
    const dateNow = new Date();
    const date = dateNow.getFullYear() - new Date(birthDate.value).getFullYear();
    if(date < 16) {
        birthdateError.style.display = 'block';
        birthdateError.innerHTML     = "il faut avoir 16ans révolu";
        setTimeout(function(){
            birthdateError.style.display ='none';
        }, 4200)
        return false;
    }
    birthdateError.innerHTML = '';
    return true;
    
}

// NUMBER OF TOURNAMENTS VERIFICATION
function checkTournamentNumber() {
    let quantityTournamentError = document.getElementById('quantity-tournament-error'); 

    if(quantityTournament.value < 0 || quantityTournament.value > 99) {
        quantityTournamentError.style.display = 'block';
        quantityTournamentError.innerHTML = "choisir entre 0 et 99 !"
        setTimeout(function(){
            quantityTournamentError.style.display ='none';
        }, 4100);
        return false;
    }
    quantityTournamentError.innerHTML = '';
    return true;
}

// CHECK LOCALISATION ACTIVED 
function activeLocation(){
    let locationError = document.getElementById('location-error');
    const locationActived = document.querySelectorAll('input[name="location"]:checked');
    if (locationActived.length === 0) {
        locationError.style.display = 'block';
        locationError.innerHTML = "choisisssez une localisation."
        setTimeout(function(){
            locationError.style.display ='none';
        }, 4000);
        return false;
    }
    locationError.innerHTML = '';
    return true
}  

// TERM OF USE
function checkBoxVerif() {
    let checkboxError = document.getElementById('checkbox-error');

    if(checkbox1.checked === false) {
        checkboxError.style.display = 'block';
        checkboxError.innerHTML = "Veuillez cocher j'ai lu et accepté les conditions d'utilisation"
        return false;
    }
    checkboxError.innerHTML = '';
    return true;
}

function forAllFieldsValidation() {
    checkFirstName()
    checkName()
    checkEmail()
    checkBirthDate()
    checkTournamentNumber()
    activeLocation()
    checkBoxVerif()
}

function formValidation() {
    if (checkFirstName() === true &&
        checkName() === true &&
        checkEmail() === true &&
        checkBirthDate() === true &&
        checkTournamentNumber() === true &&
        activeLocation() === true &&
        checkBoxVerif() === true) {
        return true;
    }
    return false;
}

// SEND FORM
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
    } else {
        forAllFieldsValidation();
    }
});


