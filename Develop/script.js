// Assignment Code
var generateBtn = document.getElementById("generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//Creates the password
function  generatePassword() {
  var trueFalse = true;
  // while loop requests user imput for password length and checks input for acceptable criteria
  while (trueFalse) {
    var passLength;
    passLength = window.prompt("Choose a password length between 8 and 128");
    // defining variables for password length logical checks
    var decimal = passLength % 1;
    passLength=parseInt(passLength);
    // While loop runs checks to ensure imputted number is a whole number between 8 and 128
    if (isNaN(passLength)) {
      alert("Must be a number.")
    }
    else if (decimal != 0) {
      alert("Must be a whole number")
    }
    else if (passLength<8 || passLength>128) {
      alert("Invalid password length.")
    }
    else {
      trueFalse = false; 
    }
  }
  return passLength * 10;
}

// https://stackoverflow.com/questions/37287093/starting-a-javascript-prompt-after-a-button-is-clicked/37287126
// https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options
// https://www.w3schools.com/js/js_random.asp