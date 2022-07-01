// DOM Elements
let first     = document.getElementById("first").value;
let last      = document.getElementById("last").value;
let email     = document.getElementById("email").value;
let birthdate = document.getElementById("birthdate").value;

// check first name
if(first.length != 0) {
    removeError("msg-first");
    if(first.length < 2) {
      nbError = nbError + 1;
      showError("msg-first", "Le champ prénom doit contenir au moins 2 caractères");
    } else {
      removeError("msg-first");
    }
  } else {
    nbError = nbError + 1;
    showError("msg-first", "Le champ prénom ne doit pas être vide");
  }