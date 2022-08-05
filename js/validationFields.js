function backgroundChangeColor() {
    const nodeList = document.querySelectorAll(".text-control");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "#f9f9f9c9";
    }
}

const form               = document.getElementById('form');
const firstName          = document.getElementById('first');
const lastName           = document.getElementById('last');
const email              = document.getElementById('email');
const birthDate          = document.getElementById('birthdate');
const tournamentQuantity = document.getElementById('quantity');
const localities         = document.getElementById('localities');
const checkbox1          = document.getElementById('checkbox1');

// PATTERN
const pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

function checkFirstName() {
    const firstValue         = firstName.value.trim();
    let firstError = document.getElementById('first-error');
    if (firstValue === "") {
        firstError.innerHTML = "Ce champ ne doit pas être vide";
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    } else if (!firstValue.match(pattern)) {
        firstError.innerHTML = "ce champ ne doit pas contenir de chiffres";
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    } else {
        let validMinimLetter = firstValue.length;
        if (validMinimLetter < 2) {
            firstError.innerHTML = "Il faut saisir au minimum 2 caractères";
            firstName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
        } else {
            firstError.innerHTML = '';
        firstName.parentElement.setAttribute('data-error-visible', 'false');
        firstName.style.backgroundColor = "#fff";
        return true;
        }
    }
        
  }
  // CHECK LAST NAME COMPLIANCE
  function checkLastName() {
    const lastValue         = lastName.value.trim();
    let lastError = document.getElementById('last-error');

    if (lastValue === "") {
        lastError.innerHTML = "Ce champ ne doit pas être vide";
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    } else if (!lastValue.match(pattern)) {
        lastError.innerHTML = "ce champ ne doit pas contenir de chiffres";
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    } else {
        let validMinimLetter = lastValue.length;
        if (validMinimLetter < 2) {
            lastError.innerHTML = "Il faut saisir au minimum 2 caractères";
            lastName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
        } else {
            lastError.innerHTML = '';
        lastName.parentElement.setAttribute('data-error-visible', 'false');
        lastName.style.backgroundColor = "#fff";
        return true;
        }
    }
}
// CHECK EMAIL VALIDATION
function checkEmail() {
    const emailValue         = email.value.trim();
    let emailError    = document.getElementById('email-error');
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailValue === "") {
        emailError.innerHTML = "Ce champ ne doit pas être vide";
        email.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    } else if (!emailValue.match(emailRegExp)) {
        emailError.innerHTML = "saisissez un format valide";
        email.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    } else {
        emailError.innerHTML = '';
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.backgroundColor = "#fff";
        return true;
        }
    }


// CHECK BIRTH DATE VALIDATY
function checkBirthDate() {    
  let birthDateError   = document.getElementById('birthdate-error');
  let getUserDate = new Date(birthDate.value).getFullYear();
  console.log(getUserDate);
  let nowDate = new Date().getFullYear();
  console.log(nowDate);
  let diff = (nowDate - getUserDate);
  console.log(diff);
  
  if (diff >= 16) {
      birthDateError.innerHTML = '';
      birthDate.parentElement.setAttribute('data-error-visible', 'false');
      birthDate.style.backgroundColor = "#fff";
    return true;
  } else if (isNaN(getUserDate)){
    birthDateError.innerHTML = "Veuillez saisir votre date de naissance";
    birthDate.parentElement.setAttribute('data-error-visible', 'true');
    return false;    
  } else {
    birthDateError.innerHTML    = "Vous devez avoir 16 ans révolu !";
    birthDate.parentElement.setAttribute('data-error-visible', 'true');
    return false;
}
}


// NUMBER OF TOURNAMENTS VERIFICATION
function checkNumberOfTournament() {
    let quantityTournamentError = document.getElementById('quantity-tournament-error');
    const quantityTournamentValue = tournamentQuantity.value;
    if (quantityTournamentValue == '') {
        quantityTournamentError.innerHTML = "Merci de remplir ce champ"
        tournamentQuantity.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    } else if (quantityTournamentValue == 0 || quantityTournamentValue < 100) {
        quantityTournamentError.innerHTML = '';
        tournamentQuantity.parentElement.setAttribute('data-error-visible', 'false');
        tournamentQuantity.style.backgroundColor = "#fff";
        return true;
    } else {
            quantityTournamentError.innerHTML = "Veuillez saisir un nombre entre 0 et 99"
            tournamentQuantity.parentElement.setAttribute('data-error-visible', 'true');
            return false;   
    }
}
    

// CHECK LOCALISATION ACTIVED 
function activeLocation(){
    let locationError = document.getElementById('location-error');
    const locationActived = document.querySelectorAll('input[name="location"]:checked');
    if (locationActived.length === 0) {
        console.log(locationActived);
        locationError.innerHTML = "choisisssez une localisation."
        localities.parentElement.setAttribute('data-error-visible', 'true');
        localities.style.border = '1px solid #e54858';
        localities.style.borderRadius = "10px";
        localities.style.padding = "9px";
        return false;
    }
    locationError.innerHTML = '';
    localities.parentElement.setAttribute('data-error-visible', 'false');
    localities.style.border = 'none';
    return true
}  

// TERM OF USE
function checkBoxVerif() {
    let checkboxError = document.getElementById('checkbox-error'); 
    if(checkbox1.checked) {
        checkboxError.innerHTML = '';
        return true;      
    }
    checkboxError.innerHTML = "Veuillez cocher j'ai lu et accepté les conditions d'utilisation";
    return false;
}

function isValidatedForm() {
    if(checkFirstName()
    && checkLastName()
    && checkEmail()
    &&checkBirthDate()
    && checkNumberOfTournament()
    && activeLocation()
    && checkBoxVerif()) {
        return true;
    } else {
        return false;
    }
}


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isValidatedForm()) {
        displayModalSubmit();
          document.getElementById('form').reset()
    }
})






 
