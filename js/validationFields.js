// DOM Elements For The Form Validation Fields
const form               = document.getElementById('form');
const firstName          = document.getElementById('first');
const lastName           = document.getElementById('last');
const email              = document.getElementById('email');
const birthDate          = document.getElementById('birthdate');
const tournamentQuantity = document.getElementById('quantity');
const localities         = document.getElementById('localities');
const locations          = document.querySelectorAll('#localities .checkbox-input');
const checkbox1          = document.getElementById('checkbox1');
const inputControl       = document.getElementsByClassName('text-control');


// PATTERN
const pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/     


// CHECK FIRST NAME COMPLIANCE
function checkFirstName() {
      let firstError = document.getElementById('first-error');
  
      if(firstName.value === '' || firstName.value.trim().length < 2|| !firstName.value.trim().match(pattern)){
          firstError.textContent  = 'Veuillez saisir au minimum 2 caractères !';
          firstName.parentElement.setAttribute('data-error-visible', 'true');
          firstName.style.border = '2px solid #e54858';
          return false;
      } 
        firstError.innerHTML = '';
        firstName.parentElement.setAttribute('data-error-visible', 'false');
        firstName.style.border = '2px solid #48e562';
        return true;
  }
  
  // CHECK LAST NAME COMPLIANCE
  function checkLastName() {
      let nameError = document.getElementById('name-error');
  
      if(lastName.value === '' || lastName.value.trim().length < 2 || !lastName.value.trim().match(pattern)) {
          nameError.textContent  = 'Veuillez saisir au minimum 2 caractères !';
          lastName.parentElement.setAttribute('data-error-visible', 'true');
          lastName.style.border = '2px solid #e54858';
          return false;
      }
        nameError.innerHTML = '';
        lastName.parentElement.setAttribute('data-error-visible', 'false');
        lastName.style.border = '2px solid #48e562';
        return true;
  }
  // CHECK EMAIL VALIDATION
  function checkEmail() {
      let emailError    = document.getElementById('email-error');
      const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
      if(email.value === '' || !email.value.trim().match(emailRegExp)) {
          emailError.textContent    = "format du email invalide !"
          email.parentElement.setAttribute('data-error-visible', 'true');
          email.style.border = '2px solid #e54858';
          return false;
      }
        emailError.innerHTML = '';
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = '2px solid #48e562';
        return true;
  }
  
  // CHECK BIRTH DATE VALIDATY
  function checkBirthDate() {    
      let birthdateError  = document.getElementById('birthdate-error');
    //   const dateNow = new Date();
    //   console.log(dateNow instanceof Date);
    //   const date = dateNow.getFullYear() - new Date(birthDate.value).getFullYear();
    //   if(date < 16) {
    //       birthdateError.textContent = "il faut avoir 16ans révolu";
    //       return false;
    //   }
    //   birthdateError.innerHTML = '';
    //   return true;
      
    const legalAge = (new Date(Date.now() - (new Date(birthDate)).getTime())).getFullYear() - 1970;
    if(Date.parse(birthDate)) {
        if(age > 15 ) {
            birthdateError.innerHTML = '';
            birthDate.parentElement.setAttribute('data-error-visible', 'false');
            birthDate.style.border = '2px solid #48e562';
            return true
        }
        birthdateError.textContent = "il faut avoir 16 ans révolu";
        birthDate.parentElement.setAttribute('data-error-visible', 'true');
        birthDate.style.border = '2px solid #e54858';
        return false
    } 
  }
  
  // NUMBER OF TOURNAMENTS VERIFICATION
  function checkNumberOfTournament() {
      let quantityTournamentError = document.getElementById('quantity-tournament-error'); 
  
      if(tournamentQuantity.value === '' || tournamentQuantity.value < 0 || tournamentQuantity.value > 99) {
          quantityTournamentError.textContent = "choisir entre 0 et 99 !"
          tournamentQuantity.parentElement.setAttribute('data-error-visible', 'true');
          tournamentQuantity.style.border = '2px solid #e54858';
          return false;
      }
      quantityTournamentError.innerHTML = '';
      tournamentQuantity.parentElement.setAttribute('data-error-visible', 'false');
      tournamentQuantity.style.border = '2px solid #48e562';
      return true;
  }
  
  // CHECK LOCALISATION ACTIVED 
  function activeLocation(){
      let locationError = document.getElementById('location-error');
      const locationActived = document.querySelectorAll('input[name="location"]:checked');
      if (locationActived.length === 0) {
          locationError.textContent = "choisisssez une localisation."
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
      if(checkbox1.checked === false) {
          checkboxError.textContent = "Veuillez cocher j'ai lu et accepté les conditions d'utilisation"
          return false;
      }
      checkboxError.innerHTML = '';
      return true;
  }

  formValidation = () => {
      checkFirstName()
      checkLastName()
      checkEmail()
      checkBirthDate()
      checkNumberOfTournament() 
      activeLocation() 
      checkBoxVerif()
  }

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formValidation() == true) {
            console.log('ok');
            document.getElementById('form').reset()
      } else {
            console.log('nok');
      }
  })