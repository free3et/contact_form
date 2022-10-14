const formWrapper = document.querySelector(".form-wrapper");
const formInputs = document.querySelectorAll("input");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const userEmail = document.querySelector(".popup h2 span");
const submitBtn = document.querySelector(".submit");
const errorMessage = document.querySelector(".error-message");
const confirmBtn = document.querySelector(".confirm");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".popup");
const closeModalBtn = document.querySelectorAll(".close-modal");

const validatePassword = (password) => {
  const isPasswordValid = password.length > 5;
  return isPasswordValid;
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  formInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      errorMessage.innerHTML = "Please fill out all fields";
    } else {
      input.classList.remove("error");
      errorMessage.innerHTML = "";
    }
  });

  if (!validatePassword(passwordInput.value)) {
    errorMessage.innerHTML =
      "The password must be<br> more than 5 characters long";
    passwordInput.classList.add("error");
  }

  if (!validateEmail(emailInput.value)) {
    errorMessage.innerHTML = "Email is not valid";
    emailInput.classList.add("error");
  }
};

const onSubmitHandler = (event) => {
  event.preventDefault();
  const emptyInputs = Array.from(formInputs).filter(
    (input) => input.value === ""
  );

  validateInputs();

  if (
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value) &&
    emptyInputs.length === 0
  ) {
    showModal();
  }
};

const showModal = () => {
  modal.classList.add("open");
  modalWrapper.classList.add("show");
};

const closeModal = () => {
  modal.classList.remove("open");
  modalWrapper.classList.remove("show");
};

const getUserEmail = () => {
  const emailValue = emailInput.value.trim();

  userEmail.innerHTML = emailValue;
  return emailValue;
};

const showUserCongrats = () => {
  closeModal();
  formWrapper.innerHTML = `<div class="inner-wrapper"><h2>Hello, user with email ${getUserEmail()}</h2><img src="../images/avatar.png" alt="avatar" /></div>`;
};

// Events

submitBtn.addEventListener("click", onSubmitHandler);
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
modalWrapper.addEventListener("click", (event) => {
  if (event.target === modalWrapper) {
    modal.classList.remove("open");
    modalWrapper.classList.remove("show");
  }
});
emailInput.addEventListener("change", getUserEmail);
confirmBtn.addEventListener("click", showUserCongrats);
