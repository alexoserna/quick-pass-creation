// Assignment code here
/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

function generatePassword() {

  var length = prompt ("How long would you like your password? (Please enter a number 8-128)");
  if ( length < 8 || length > 128 || isNaN(length)){
    alert("Error. Password length must be between 8 and 128 characters.");
    return;
  }
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numbers?");
  var special = confirm("Include special characters?");

  // Validate user input
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Invalid input. Please select at least one character type.");
    return;
  }
  
  // Create a pool of characters to select from based on user criteria
  var charPool = '';
  if (lowercase) {
    charPool += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (uppercase) {
    charPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (numeric) {
    charPool += '0123456789';
  }
  if (special) {
    charPool += '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }
  
  // Generate password by randomly selecting characters from the pool
  var password = '';
  for (var i = 0; i < length; i++) {
    password += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }  

  alert("Your new password is: " + password);

  return password;
}

/* password criteria legnth, character types ( lowercase, uppercase, numeric, special characters)
atleast one character type should be selected */

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
