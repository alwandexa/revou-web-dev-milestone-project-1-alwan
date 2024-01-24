const passwordInvalid = () => {
  const password = document.getElementById("password");
  const message =
    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character !";

  password.oninput = password.setCustomValidity("");
  password.oninvalid = password.setCustomValidity(message);
};

passwordInvalid();
