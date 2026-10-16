// =============================================
// ============ Form Contact section ============
const form = document.querySelector(".contact__form");
const inputLName = document.getElementById("contact-lastname");
const inputFName = document.getElementById("contact-firstname");
const inputPhone = document.getElementById("contact-phone");
const inputEmail = document.getElementById("contact-email");
const inputService = document.getElementById("contact-service");
const inputDate = document.getElementById("contact-date");
const inputTime = document.getElementById("contact-time");
const inputMessage = document.getElementById("contact-message");

function autoDisplayService() {
  const getServiceStore = sessionStorage.getItem('category');
  const serviceOption = inputService.options;


  const match = Array.from(serviceOption).find(opt => {
    const optgroup = opt.closest('optgroup');
    if (!optgroup) return false;
    return optgroup?.dataset.category === getServiceStore && opt.value !='';
  })

  if (!match) return false;
  inputService.value = match.value;
  // Supprime l'ancienne valeur après utilisation
  // sessionStorage.removeItem('category');
}

autoDisplayService();
function displayError(input, errorMessage) {
  const inputId = input.id;
  const errorEl = document.getElementById(`${inputId}-error`);
  errorEl.textContent = errorMessage; // remplit le slot existant
  // const errorEl = document.createElement("p");
  // errorEl.id = `${inputId}-error`;
  // errorEl.textContent = errorMessage;
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", errorEl.id);
  input.after(errorEl);
  input.focus();
}

function removeError(input) {
  const existingErrorMsg = document.getElementById(`${input.id}-error`);
  if (existingErrorMsg) {
    existingErrorMsg.textContent = '';// vide le slot, ne le supprimer pas
    input.setAttribute("aria-invalid", "false");
    input.removeAttribute("aria-describedby");
  }
}

function hundleError(input, errorMessage) {
  removeError(input);
  displayError(input, errorMessage);
}

function isValidName(inputValue, input, fieldName) {
  if (!inputValue) {
    hundleError(input, `${fieldName} obligatoire`);
    return false;
  }
  if (inputValue.length < 3) {
    hundleError(input, `${fieldName} avec au minimum 3 caracteres`);
    return false;
  }
  removeError(input);
  return true;
}

function isValidPhone(inputValue, input) {
  if (!inputValue) {
    hundleError(input, "Numéro obligatoire");
    return false;
  }
  const regex = /^(0)[5-7][0-9]{8}$/;
  if (!regex.test(inputValue)) {
    hundleError(input, "Format attendu : 0X XX XX XX XX");
    return false;
  }
  removeError(input);
  return true;
}

function isValidEmail(inputValue, input) {
  if (!inputValue) {
    hundleError(input, "email obligatoire");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
    hundleError(input, "email incorrect");
    return false;
  }
  removeError(input);
  return true;
}

function isValidDate(inputValue, input) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = new Date(inputValue);
  if (selectedDate < today) {
    hundleError(input, "date erronée");
    return false;
  }
  removeError(input);
  return true;
}

function isValidTime(inputValue, input) {
  if (!inputValue) {
    hundleError(input, "Veuillez sélectionner une heure de RDV");
    return false;
  }
  if (inputValue < "08:30" || inputValue > "17:00") {
    hundleError(input, "Le salon est ouvert de 08:30 à 17:00");
    return false;
  }
  removeError(input);
  return true;
}

function isValidService(inputValue, input) {
  if (!inputValue) {
    hundleError(input, "Choisir une prestation");
    return false;
  }
  removeError(input);
  return true;
}

function isValidMessage(inputValue, input) {
  if (!inputValue) return true;
  if (inputValue.length < 15) {
    hundleError(input, "message de minimum 15 caracteres");
    return false;
  }
  removeError(input);
  return true;
}

function validateInput() {
  const lastName = inputLName.value.trim();
  const firstName = inputFName.value.trim();
  const phone = inputPhone.value.trim();
  const email = inputEmail.value.trim().toLowerCase();
  const service = inputService.value;
  const date = inputDate.value;
  const time = inputTime.value;
  const message = inputMessage.value.trim().toLowerCase();

  const lastNameValid = isValidName(lastName, inputLName, "Nom");
  const firstNameValid = isValidName(firstName, inputFName, "Prénom");
  const emailValid = isValidEmail(email, inputEmail);
  const phoneValid = isValidPhone(phone, inputPhone);
  const dateValid = isValidDate(date, inputDate);
  const timeValid = isValidTime(time, inputTime);
  const serviceValid = isValidService(service, inputService);
  const messageValid = isValidMessage(message, inputMessage);

  if (!lastNameValid) {
    inputLName.focus();
  } else if (!firstNameValid) {
    inputFName.focus();
  } else if (!phoneValid) {
    inputPhone.focus();
  } else if (!emailValid) {
    inputEmail.focus();
  } else if (!serviceValid) {
    inputService.focus();
  } else if (!dateValid) {
    inputDate.focus();
  } else if (!timeValid) {
    inputTime.focus();
  } else if (!messageValid) {
    inputMessage.focus();
  }

  const isFormValid =
    lastNameValid &&
    firstNameValid &&
    emailValid &&
    phoneValid &&
    dateValid &&
    timeValid &&
    serviceValid;

  // le formulaire est valide seulement si TOUT est valide
  return isFormValid;
}

function buildReservation() {
  const serviceSelect = inputService;
  const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
  console.log(serviceSelect,serviceText);
  return {
    lastName: inputLName.value.trim(),
    firstName: inputFName.value.trim(),
    phone: inputPhone.value.trim(),
    email: inputEmail.value.trim(),
    service: serviceText,
    date: inputDate.value,
    time: inputTime.value,
    message: inputMessage.value.trim().toLowerCase() || "aucun message",
  };
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateInput()) return;
  if (validateInput()) {
    const reservation = buildReservation();
    saveReservation(reservation)
    alert("Votre message a bien été envoyé !");
    form.reset();
    window.location.href = 'confirmation.html';
  }
});

// Saisi en temps reel
inputLName.addEventListener("input", () => {
  const lastName = inputLName.value.trim().toLowerCase();
  isValidName(lastName, inputLName, "Nom");
});
inputFName.addEventListener("input", () => {
  const firstName = inputFName.value.trim().toLowerCase();
  isValidName(firstName, inputFName, "Prénom");
});
inputPhone.addEventListener("input", () => {
  const phone = inputPhone.value.trim();
  isValidPhone(phone, inputPhone);
});
inputEmail.addEventListener("input", () => {
  const email = inputEmail.value.trim();
  isValidEmail(email, inputEmail);
});
inputMessage.addEventListener("input", () => {
  const message = inputMessage.value.trim().toLowerCase();
  isValidMessage(message, inputMessage);
});

// Stockage des donnees cote client
function saveReservation(reservation) {
  const reservationString = JSON.stringify(reservation);
  localStorage.setItem('reservation', reservationString);
}


