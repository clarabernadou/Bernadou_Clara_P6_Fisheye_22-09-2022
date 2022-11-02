// DOM elements
const main = document.querySelector('main');
const header = document.querySelector('header');
const modal = document.getElementById("contact_modal");
const sendBtn = document.getElementById("send-button");
const form = document.querySelector('form');
const confirmMsg = document.querySelector('.confirmMsg');
const contactezMoi = document.querySelector('.contactezMoi');

const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const yourMessage = document.getElementById('yourMessage');

// Open the contact modal
function displayModal() {   
	modal.showModal()
  form.style.display = "block";
  confirmMsg.style.display = "none";
  modal.setAttribute('aria-hidden', 'false');
  main.setAttribute('aria-hidden', 'true');
  header.setAttribute('aria-hidden', 'true');
}

// close the contact modal
function closeModal() {    
    modal.close()
}

// launch the confirm message
function openConfirmMsg(){
    form.style.display = "none";
    confirmMsg.style.display = "block";
    contactezMoi.style.display = "none";
    
};

// error messages
const errorMsg = {
  firstErrorMsg: "Veuillez entrer votre prénom.",
  lastErrorMsg: "Veuillez entrer votre nom.",
  emailErrorMsg: "Veuillez entrer une adresse email valide.",
  yourMessageErrorMsg: "Veuillez entrer un message de min. 10 charactères."
};

// show & deleted error message when field is invalid & valid
function isInvalid(element, message){
  element.parentElement.setAttribute("data-error-visible", "true");
  element.parentElement.setAttribute("data-error", message);
};
function isValid(element){
  element.parentElement.setAttribute("data-error-visible", "false");
  element.parentElement.removeAttribute("data-error");
};

// clear error messages
function clearErrors(){
  let invalidInput = document.querySelectorAll('.formData[data-error-visible="true"]');
  for(let input of invalidInput){
    input.setAttribute("data-error-visible", "false");
    input.removeAttribute("data-error");
  }
};

// verify if the field is empty or if it has less than 2 characters
function firstValid(first, message){
  const firstInput = first.value;
  if(firstInput !== null && firstInput.length >= 1){
    isValid(first);
    return true;
  }else{
    isInvalid(first, message);
  }
};

// verify if the field is empty or if it has less than 2 characters
function lastValid(last, message){
  const lastInput = last.value;
  if(lastInput !== null && lastInput.length >= 1){
    isValid(last);
    return true;
  }else{
    isInvalid(last, message);
  }
};

// verify email format
function emailValid(email, message){
  let regex = /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;
  let emailInput = email.value;
  if(emailInput.match(regex)){
    isValid(email);
    return true;
  }else{
    isInvalid(email, message);
  }
};

// verify message format
function yourMessageValid(yourMessage, message){
    const yourMessageInput = yourMessage.value;
    if(yourMessageInput !== null && yourMessageInput.length >= 1){
        isValid(yourMessage);
        return true;
      }else{
        isInvalid(yourMessage, message);
      }
}

// addEventListener to change
first.addEventListener('change', () => {
  firstValid(first, errorMsg.firstErrorMsg);
});
last.addEventListener('change', () => {
  lastValid(last, errorMsg.lastErrorMsg);
});
email.addEventListener('change', () => {
  emailValid(email, errorMsg.emailErrorMsg);
});
yourMessage.addEventListener('change', () => {
  yourMessageValid(yourMessage, errorMsg.yourMessageErrorMsg);
});

// if the fields are false, display an error message
function validate(){
  let formValid = true;
  if(!(firstValid(first, errorMsg.firstErrorMsg))){formValid = false};
  if(!(lastValid(last, errorMsg.lastErrorMsg))){formValid = false};
  if(!(emailValid(email, errorMsg.emailErrorMsg))){formValid = false};
  if(!(yourMessageValid(yourMessage, errorMsg.yourMessageErrorMsg))){formValid = false};

  if(formValid){
      console.log(first.value, last.value, email.value, yourMessage.value)
    clearErrors();
    clearForm();
    openConfirmMsg();
  } else {
      console.log("Error")
  };
}

// clear fields
function clearForm(){
  let formInputs = document.querySelectorAll('.formData input');
  for (filledInput of formInputs){
    filledInput.value = "";
  }
};

// submit & validate the form
form.addEventListener('submit', function(e){
  e.preventDefault();
  validate()
});