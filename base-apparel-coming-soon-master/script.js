const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const errSymbol = document.querySelector(".error-symbol");
const errMessage = document.querySelector(".error-message");

function validateForm() {
  const form = document.querySelector("form");
  const emailAddress = document.querySelector("input").value;

  if (emailRegex.test(emailAddress)) {
    return true;
  } else {
    errSymbol.classList.remove("hidden");
    errMessage.classList.remove("hidden");
    form.style.border = "2px solid hsl(0, 93%, 68%)";
    return false;
  }
}
