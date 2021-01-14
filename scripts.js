const form = document.getElementById("loginForm");
const clearButton = document.getElementById("clear");

function handleEmailValidation() {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      document.getElementById("email").value
    ) &&
    document.getElementById("password").value.length
  ) {
    alert("Login successfully!");
  } else alert("Email or password is not correct!");
}

function clearData() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

clearButton.addEventListener("click", clearData);

form.addEventListener("submit", handleEmailValidation);
