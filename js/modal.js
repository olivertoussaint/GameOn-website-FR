// DOM MODAL Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.getElementsByClassName("close");

// launch modal form
let launchModal = () => modalbg.style.display = "block";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));



// close modal form
let closeModal = () => modalbg.style.display = "none";

// close modal event
closeModalBtn[0].addEventListener("click", closeModal);
