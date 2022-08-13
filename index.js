// Validation for Registration-form

let Name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");

function clearError() {
  errors = document.getElementsByClassName("error");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function form_validation() {
  let returnvalue = true;
  clearError();

  // validation for name
  if (Name.value == "") {
    document.getElementById("name_error").innerHTML = "**Name is Required!";
    returnvalue = false;
  } else if (Name.value.length < 3 || Name.value.length > 20) {
    document.getElementById("name_error").innerHTML =
      "**Name must be in bettween 3 and 20 character.";
    returnvalue = false;
  } else if (!isNaN(Name.value)) {
    document.getElementById("name_error").innerHTML =
      "**Enter character only.";
    returnvalue = false;
  }

  // validation for email
  if (email.value == "") {
    document.getElementById("email_error").innerHTML = "**Email is Required!";
    returnvalue = false;
  }

  // validation for mobile
  if (mobile.value == "") {
    document.getElementById("mobile_error").innerHTML =
      "**Mobile number Required!";
    returnvalue = false;
  } else if (mobile.value.length != 10) {
    document.getElementById("mobile_error").innerHTML =
      "**Enter the ten digit mobile number.";
    returnvalue = false;
  } else if (isNaN(mobile.value)) {
    document.getElementById("mobile_error").innerHTML =
      "**Enter the numbers only.";
    returnvalue = false;
  }

  // validation for password
  if (password.value == "") {
    document.getElementById("password_error").innerHTML =
      "**Password is Required!";
    returnvalue = false;
  } else if (password.value.length < 8 || password.value.length > 20) {
    document.getElementById("password_error").innerHTML =
      "**Password must be in bettween 8 and 20 character.";
    returnvalue = false;
  } else if (
    !(password.value.match(/[0-9]/))) {
    document.getElementById("password_error").innerHTML = "**Password should containt atleast 1 Number, 1 Special Symblol, 1 Uppercase & 1 Lowercase character.";
    returnvalue = false;
  } 
  else if (!(password.value.match(/[A-Z]/))) {
    document.getElementById("password_error").innerHTML =
      "**Password should containt atleast 1 Number, 1 Special Symblol, 1 Uppercase & 1 Lowercase character.";
    returnvalue = false;
  }
  else if (!(password.value.match(/[a-z]/))) {
    document.getElementById("password_error").innerHTML =
      "**Password should containt atleast 1 Number, 1 Special Symblol, 1 Uppercase & 1 Lowercase character.";
    returnvalue = false;
  }
  else if (!(password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/))) {
    document.getElementById("password_error").innerHTML =
      "**Password should containt atleast 1 Number, 1 Special Symblol, 1 Uppercase & 1 Lowercase character.";
    returnvalue = false;
  }

  // validation for confrim password
  if (cpassword.value == "") {
    document.getElementById("cpassword_error").innerHTML =
      "**Confirm Password is Required!";
    returnvalue = false;
  } else if (password.value !== cpassword.value) {
    document.getElementById("cpassword_error").innerHTML =
      "**Password must be same as above.";
    returnvalue = false;
  }

  return returnvalue;
}
