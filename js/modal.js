// DOM MODAL ELEMENTS
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// LAUNCH MODAL FORM
let launchModal = () => modalbg.style.display = "block";

// LAUNCH MODAL EVENT
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));



// CLOSE MODAL FORM
let closeModal = () => modalbg.style.display = "none";

// CLOSE MODAL EVENT
closeModalBtn[0].addEventListener("click", closeModal);
