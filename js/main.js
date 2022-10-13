const formWrapper = document.querySelector(".form-wrapper");
const submitBtn = document.querySelector(".submit");
const confirmBtn = document.querySelector(".confirm");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".popup");
const closeModalBtn = document.querySelectorAll(".close-modal");
const emailInput = document.querySelector("input[type='email']");
const userEmail = document.querySelector(".popup h2 span");

const showModal = (event) => {
  event.preventDefault();
  modal.classList.add("open");
  modalWrapper.classList.add("show");
};

const closeModal = (event) => {
  modal.classList.remove("open");
  modalWrapper.classList.remove("show");
};

const getUserEmail = () => {
  const emailValue = emailInput.value.trim();

  userEmail.innerHTML = emailValue;
  return emailValue;
};

const showUserCongrats = () => {
  formWrapper.innerHTML = `<div class="inner-wrapper"><h2>Hello, user with email ${getUserEmail()}</h2><img src="../images/avatar.png" alt="avatar" /></div>`;
};

// Events

submitBtn.addEventListener("click", showModal);
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
modalWrapper.addEventListener("click", closeModal);
emailInput.addEventListener("change", getUserEmail);
confirmBtn.addEventListener("click", showUserCongrats);

// mobile adaptive
// validation
// disable submit btn
