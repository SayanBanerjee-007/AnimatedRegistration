const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const popup = document.getElementById("popup");
const alertIcon = document.getElementById("alert-icon");
const popupMsg = document.getElementById("message");
const popupBtn = document.getElementById("popup-btn");

function isNameValid() {
  const regx1 = /([A-Za-z0-9])/;
  const regx2 = /^\s/;
  const regx3 = /\s$/;
  const regx4 = /\s/;
  if (
    regx1.test(username.value) &&
    !regx2.test(username.value) &&
    !regx3.test(username.value) &&
    !regx4.test(username.value) &&
    username.value.length > 5 &&
    username.value.length < 31
  ) {
    return true;
  }
  return false;
}
function isEmailValid() {
  const regx1 = /^\w[A-Za-z0-9_.]{2,}@[A-Za-z]{2,10}\.[a-z]{2,7}$/;
  const regx2 = /^\..*\.{2,}/;
  const regx3 = /^_.*_{2,}/;
  const regx4 = /(_@)/;
  const regx5 = /(\.@)/;
  if (
    regx1.test(email.value) &&
    !regx2.test(email.value) &&
    !regx3.test(email.value) &&
    !regx4.test(email.value) &&
    !regx5.test(email.value) &&
    email.value.length > 6 &&
    email.value.length < 51
  ) {
    return true;
  }
  return false;
}
function isPasswordValid() {
  const regx1 = /\s/;
  if (
    !regx1.test(password.value) &&
    password.value.length > 5 &&
    password.value.length < 21
  ) {
    return true;
  }
  return false;
}

username.addEventListener("input", () => {
  if (!isNameValid()) {
    username.classList.add("red");
    username.classList.remove("green");
  } else {
    username.classList.remove("red");
    username.classList.add("green");
  }
});
email.addEventListener("input", () => {
  if (!isEmailValid()) {
    email.classList.add("red");
    email.classList.remove("green");
  } else {
    email.classList.remove("red");
    email.classList.add("green");
  }
});
password.addEventListener("input", () => {
  if (!isPasswordValid()) {
    password.classList.add("red");
    password.classList.remove("green");
  } else {
    password.classList.remove("red");
    password.classList.add("green");
  }
});
btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    username.classList.contains("red") ||
    email.classList.contains("red") ||
    password.classList.contains("red")
  ) {
    alertIcon.name = 'alert-outline';
    popupMsg.innerText = `Invalid input details.`;
  }
  else {
    alertIcon.name = "checkmark-done-outline";
    popupMsg.innerText = `Registration successful.`;    
    document.querySelector('form').reset();
  }
  popup.classList.add('visible');
});
popupBtn.addEventListener("click", (event) => { 
  console.log('clicked');
  popup.classList.remove('visible');
})
