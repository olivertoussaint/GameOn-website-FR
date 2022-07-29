// DOM ELEMENTS CONFIRMATION
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// ------ SUBMITTED CONFIRMATION ------ //
// DISPLAY MODAL SUBMIT
function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}

// CLOSE SUBMIT
function closeSubmit() {
    modalSubmit[0].style.display = 'none';
    firstName.style.border = 'none';
    lastName.style.border = 'none';
    email.style.border = 'none';
    birthDate.style.border = 'none';
    tournamentQuantity.style.border = 'none';
    localities.style.border = 'none';
}

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit)