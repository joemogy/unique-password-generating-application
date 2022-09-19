// Assignment Code
var generateBtn = document.querySelector("#generate");

//function generate password, 
//which will be displayed in the text box,
//prompt user for password length
//prompt user for character types
//if user does not select character types, alert user to select at least one character type
//if user selects character types, generate password with selected character types
//return password with specified lengh and charectortypes to writePassword function
//which is the value of the passwordText variable  
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
//if user select prompt for lowercase, uppercase, numeric, and/or special characters
//then generate password with the selected characters
//return password
  var passwordCharacters = "";
  if (passwordLowercase === true) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordUppercase === true) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passwordNumeric === true) {
  passwordCharacters += "0123456789";
  }
  if (passwordSpecial === true) {
    passwordCharacters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  }  
  for (var i = 0; i < passwordLength; i++) {
  password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);