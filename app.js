// email
const email = document.querySelector("#email");
const emailConfirm = document.querySelector("#emailConfirm");
// email regex
// prettier-ignore
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// password
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

// submit
const submit = document.querySelector("#submit");

/** isEmailValid
 * check if user email is valid - not empty or null - correct format - emails match
 * e.g "florian.simunek@gmail.com"
 * @param {HTMLElement} element - email input
 */
function isEmailValid(element) {
  // check if email is not empty or null
  if (element.value === "" || element.value === null) {
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
  }
}

submit.addEventListener("click", (e) => {
  // prevent form submission
  e.preventDefault();

  // check if email is valid
  isEmailValid(email);
  isEmailValid(emailConfirm);
});
