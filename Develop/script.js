// Assignment Code
var generateBtn = document.querySelector("#generate");

//function generate password, 
//prompt user for password length 
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }

  //prompt user to choose lowercase, uppercase, numeric, and/or special characters
  var passwordLowercase = confirm("Would you like to include lowercase letters?");
  var passwordUppercase = confirm("Would you like to include uppercase letters?");
  var passwordNumeric = confirm("Would you like to include numbers?");
  var passwordSpecial = confirm("Would you like to include special characters?");

  //if user does not select prompt for lowercase, uppercase, numeric, and/or special characters
  //then alert user to select at least one character type
  if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false) {
  alert("You must select at least one character type");
    return;
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);