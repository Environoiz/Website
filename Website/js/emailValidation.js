"use strict";

const contactForm = document.forms["contactForm"];
let valid = false;
const regex = {
    email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  };



//Email Check
const email = contactForm.elements["email"];
email.addEventListener("input", () => {
  if (email.value.trim().length === 0) {
    email.classList.add("invalid");
    valid = false;
  } else if (!regex.email.test(email.value)) {
    email.classList.add("invalid");
    valid = false;
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
    valid = true;
  }
});

contactForm.addEventListener("submit", (event) => {
  if (!valid) event.preventDefault();
});
