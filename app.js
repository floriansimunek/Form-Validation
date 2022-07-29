// check if input is empty or null
function isInputEmpty(input) {
  return !input || input.length === 0;
}

// email
const email = document.querySelector("#email");
const emailConfirm = document.querySelector("#emailConfirm");

function isEmailValid(email) {
  if (isInputEmpty(email)) {
    console.log("email is empty");
  }
}

// password
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

// submit
const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  // prevent form submission
  e.preventDefault();

  // check if email is valid
  isEmailValid(email.value.trim());
});
