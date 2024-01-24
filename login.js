const passwordInvalid = () => {
  const message =
    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character !";

  const password = document.getElementById("password");
  const submit = document.querySelector(".login-button");

  submit.addEventListener("click", () => {
    if (password.validity.patternMismatch) {
      password.setCustomValidity(message);
    } else {
      password.setCustomValidity("");
    }
  });
};

passwordInvalid();
