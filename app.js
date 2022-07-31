// email
const email = document.querySelector("#email");
const emailConfirm = document.querySelector("#emailConfirm");
// email regex
// prettier-ignore
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// password
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
// password regex
// prettier-ignore
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// submit
const submit = document.querySelector("#submit");

/** isEmailValid
 * check if user email is valid - not empty or null - correct format - email inputs match
 * e.g "florian.simunek@gmail.com"
 * @param {HTMLElement} element - email input
 */
function isEmailValid(element) {
  // check if email is not empty or null
  if (isInputEmpty(element)) {
    setErrorFor(element, "Your email is empty");
  }
  // check if emails match
  else if (email.value != emailConfirm.value) {
    setErrorFor(element, "Your emails does not match");
  }
  // check if email format is correct
  else if (!element.value.match(emailRegex)) {
    setErrorFor(element, "Your email is not correct - example@test.com");
  } else {
    // if no errors : success
    setSuccessFor(element);
  }
}

/** isPasswordValid
 * check if user password is valid - not empty or null - correct format - password inpus match
 * e.g "Password0!"
 * @param {HTMLElement} element - password input
 */
function isPasswordValid(element) {
  // check if password is not empty or null
  if (isInputEmpty(element)) {
    setErrorFor(element, "Your password is empty");
  }
  // check if passwords match
  else if (password.value != passwordConfirm.value) {
    setErrorFor(element, "Your password does not match");
  }
  // check if password is correct
  else if (!element.value.match(passwordRegex)) {
    setErrorFor(element, "Your password is not correct\n-Minimum 8 characters\n-One uppercase letter\n-One lowercase letter\n-One Number\n-One special character");
  } else {
    // if no errors : success
    setSuccessFor(element);
  }
}

/** isInputEmpty
 * return true if the user input is empty
 * @param {string} input.value
 */
function isInputEmpty(input) {
  return !input.value || input.value === "" || input.value === null;
}

/** setErrorFor
 * create errors list below input
 * e.g "Your email is empty"
 * @param {HTMLElement} element - input
 * @param {string} message - error
 */
function setErrorFor(element, message) {
  // remove "success" class + add "error" class
  element.classList.remove("success");
  element.classList.add("error");

  errorsDisplay(element, message, true);
}

/** setSuccessFor
 * @param {HTMLElement} element - input
 */
function setSuccessFor(element) {
  // add "success" class + remove "error" class
  element.classList.add("success");
  element.classList.remove("error");

  errorsDisplay(element);
}

/** errorsDisplay
 * display the error message below the invalid input
 * e.g "test@gm" : "Your email is not correct - example@test.com"
 * @param {HTMLElement} element - input
 * @param {string} message - error
 * @param {bool} append - need to create error element
 */
function errorsDisplay(element, message = "", append = false) {
  // create li element + display error message
  let li = document.createElement("li");
  li.innerText = message;

  // get parent element + get ".small" element inside of parent
  const parent = element.parentElement;
  const small = parent.querySelector(".small");

  // append message error item
  small.innerHTML = "";
  if (append) {
    small.appendChild(li);
    small.hidden = false;
  }
}

// check all user inputs when the form is submitted
submit.addEventListener("click", (e) => {
  // prevent form submission
  e.preventDefault();

  // check if email inputs are valid
  isEmailValid(email);
  isEmailValid(emailConfirm);

  // check if password inputs are valid
  isPasswordValid(password);
  isPasswordValid(passwordConfirm);
});
