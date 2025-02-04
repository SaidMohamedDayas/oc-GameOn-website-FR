// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const closeBtnConfim = document.querySelectorAll(".btn-confirm");
const closeConfirmBtn = document.querySelector(".modal-confirm-content .close");
const form = document.querySelector('form[name="reserve"]');
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const newYork = document.getElementById("location1");
const seatle = document.getElementById("location2");
const chicago = document.getElementById("location3");
const boston = document.getElementById("location4");
const portland = document.getElementById("location5");
const validConditions = document.getElementById("checkbox1");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const modalconfirm = document.querySelector(".modal-confirm");
const menuIcon = document.querySelector(".icon");

function editNav() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// burger menu
menuIcon.addEventListener("click", editNav);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// lauch modal confirm
function launchModalConfirm() {
  modalconfirm.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal confirm
function closeModalConfirm() {
  modalconfirm.style.display = "none";
}

// bouton close ferme la modal form
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// bouton Fermer ferme la modal confirm
closeBtnConfim.forEach((btn) =>
  btn.addEventListener("click", closeModalConfirm)
);

// bouton close ferme la modal confirm
closeConfirmBtn.addEventListener("click", closeModalConfirm);

// Validation des champs du formulaire
form.addEventListener("submit", function (event) {
  let isValid = true;
  // Validation du prénom
  let formData = firstName.closest(".formData");
  if (firstName.value.trim().length < 2) {
    formData.setAttribute("data-error-visible", "true");
    formData.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le prénom."
    );
    isValid = false;
  } else {
    formData.removeAttribute("data-error-visible");
    formData.removeAttribute("data-error");
  }

  // Validation du nom
  formData = lastName.closest(".formData");
  if (lastName.value.trim().length < 2) {
    formData.setAttribute("data-error-visible", "true");
    formData.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le nom."
    );
    isValid = false;
  } else {
    formData.removeAttribute("data-error-visible");
    formData.removeAttribute("data-error");
  }

  // Validation de l'email
  formData = email.closest(".formData");
  if (!email.value.match(regexEmail)) {
    formData.setAttribute("data-error-visible", "true");
    formData.setAttribute("data-error", "Veuillez entrer un email valide.");
    isValid = false;
  } else {
    formData.removeAttribute("data-error-visible");
    formData.removeAttribute("data-error");
  }

  // Validation du nombre de tournois
  formData = quantity.closest(".formData");
  if (isNaN(quantity.value) || quantity.value.trim() === "") {
    formData.setAttribute("data-error-visible", "true");
    formData.setAttribute("data-error", "Veuillez entrer un nombre valide.");
    isValid = false;
  } else {
    formData.removeAttribute("data-error-visible");
    formData.removeAttribute("data-error");
  }

  // Validation de la date de naissance
  formData = birthdate.closest(".formData");
  if (birthdate.value === "") {
    formData.setAttribute("data-error-visible", "true");
    formData.setAttribute(
      "data-error",
      "Vous devez entrer une date de naissance."
    );
    isValid = false;
  } else {
    formData.removeAttribute("data-error-visible");
    formData.removeAttribute("data-error");
  }

  // Validation de la ville
  formData = newYork.closest(".formData");
  if (
    !newYork.checked &&
    !seatle.checked &&
    !chicago.checked &&
    !boston.checked &&
    !portland.checked
  ) {
    formData.setAttribute("data-error-visible", "true");
    formData.setAttribute("data-error", "Vous devez choisir une ville.");
    isValid = false;
  } else {
    formData.removeAttribute("data-error-visible");
    formData.removeAttribute("data-error");
  }

  // Validation des conditions d'utilisation
  formData = validConditions.closest(".formData");
  if (!validConditions.checked) {
    formData.setAttribute("data-error-visible", "true");
    formData.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    isValid = false;
  } else {
    formData.removeAttribute("data-error-visible");
    formData.removeAttribute("data-error");
  }

  // Si le formulaire n'est pas valide, on empêche l'envoi
  if (!isValid) {
    event.preventDefault();
  }

  if (isValid) {
    // Si le formulaire est valide, on ferme la modal
    closeModal();
    // On affiche un message de succès
    launchModalConfirm();
    // On réinitialise le formulaire
    form.reset();
  }

  // On empêche le rechargement de la page
  event.preventDefault();
});
