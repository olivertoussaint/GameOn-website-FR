// DOM Elements For The Form Validation Fields
const form          = document.getElementById('form');
const regex         = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const firstName     = document.getElementById('first');
const lastName      = document.getElementById('last');
const email         = document.getElementById('email');
const birthdate     = document.getElementById('birthdate');
const quantity      = document.getElementById('quantity');
const localities    = document.getElementById('localities');
const locations     = document.querySelectorAll('#localities .checkbox-input');
const checkbox1     = document.getElementById('checkbox1');
const inputControl  = document.getElementsByClassName('text-control');

// First Name Verification
function verifFirstName() {
    if(firstName.value.trim().length < 2 || firstName.value.trim() === "" || !firstName.value.match(regex)) {
        firstName.setAttribute('msg-first-visible', 'true');
        firstName.style.border = 'red';
        console.log(firstName);
        return false;
    } else {
        firstName.setAttribute('msg-first-visible', 'false');
        firstName.style.border = 'grey';
        return true;
    }
} 
