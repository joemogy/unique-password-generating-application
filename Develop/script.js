// Assignment Code
var generateBtn = document.querySelector("#generate");

//function generate password, prompt user for password length 
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
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