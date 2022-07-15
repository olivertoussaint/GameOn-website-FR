// DOM Elements For The Form Validation Fields
const form          = document.getElementById('form');
// const firstName     = document.getElementById('first');
// const lastName      = document.getElementById('last');
// const email         = document.getElementById('email');
const birthdate     = document.getElementById('birthdate');
// const quantity      = document.getElementById('quantity');
const localities    = document.getElementById('localities');
const locations     = document.querySelectorAll('#localities .checkbox-input');
// const checkbox1     = document.getElementById('checkbox1');
const inputControl  = document.getElementsByClassName('text-control');
const pattern       = /^[a-zA-Z\-]+$/;

// CHECK FIRST NAME COMPLIANCE
function checkFirstName() {
    let firstError  = document.getElementById('first-error');
    const firstName = document.getElementById('first').value;

    if(firstName.length < 2){
        firstError.style.display = 'block';
        firstError.innerHTML = 'Veuillez mettre au minimum 2 caractères !';
        setTimeout(function(){
            firstError.style.display ='none';
        }, 3000)
        return false;
    }
    if(!firstName.match(pattern)) {
        firstError.style.display = 'block';
        firstError.innerHTML = "⛔ uniquement des lettres";
        setTimeout(function(){
            firstError.style.display ='none';
        }, 3000);
        return false;
    }
    firstError.innerHTML = '';
    return true;
}

// CHECK LAST NAME COMPLIANCE
function checkName() {
    let nameError = document.getElementById('name-error');
    const lastName      = document.getElementById('last').value;
    // const pattern       = /^[a-zA-Z\-]+$/;

    if(!lastName.match(pattern)) {
        nameError.style.display = 'block';
        nameError.innerHTML = "⛔ pas de caractères spéciaux / alphanumérique";
        setTimeout(function(){
            nameError.style.display ='none';
        }, 3000);
        return false;
    }
    nameError.innerHTML = '';
    return true;
}
// CHECK EMAIL VALIDATION
function checkEmail() {
    let emailError = document.getElementById('email-error');
    const email         = document.getElementById('email').value;
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!email.match(emailRegExp)) {
        emailError.style.display = 'block';
        emailError.innerHTML = "format du email invalide !"
        setTimeout(function(){
            emailError.style.display ='none';
        }, 3000);
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

// NUMBER OF TOURNAMENTS VERIFICATION
function checkTournament() {
    let tournamentError = document.getElementById('tournament-error');
    const quantity      = document.getElementById('quantity').value;

    if(quantity < 0 ||quantity > 99 || typeof(quantity !== number)) {
        tournamentError.style.display = 'block';
        tournamentError.innerHTML = "choisir entre 0 et 99 !"
        setTimeout(function(){
            tournamentError.style.display ='none';
        }, 3000);
        return false;
    }
    tournamentError.innerHTML = '';
    return true;
}

// TERM OF USE
function checkBoxVerif() {
    let checkboxError = document.getElementById('checkbox-error');
    const checkbox1     = document.getElementById('checkbox1');
    if(checkbox1.checked === false) {
        checkboxError.style.display = 'block';
        checkboxError.innerHTML = "Veuillez cocher les conditions d'utilisation"
        setTimeout(function(){
            checkboxError.style.display ='none';
        }, 3000);
        return false;
    }
    checkboxError.innerHTML = '';
    return true;
}

// SEND FORM
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkFirstName();
    checkName();
    checkEmail();
    checkTournament();
    checkBoxVerif();
},false);


