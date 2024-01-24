const passwordInvalid = () => {
  const message =
    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character !";

  document.getElementById("password").setCustomValidity(message);
};

passwordInvalid();
