function addErrorClass() {
  //add an error class that handles if the inputs on password and confirmPassword aren't the same.
  var password1 = document.getElementById("password");
  var password2 = document.getElementById("confirmPassword");

  var isInvalid = true;

  if (password1.value === password2.value) {
    isInvalid = false;
  }

  if (isInvalid) {
    password1.classList.add("error");
    password2.classList.add("error");
    alert("Error!");
  } else {
    password1.classList.remove("error");
    password2.classList.remove("error");
    alert("Error removed");
  }
  alert("Error!");
}
