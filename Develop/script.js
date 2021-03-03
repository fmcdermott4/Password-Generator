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
  var passLength;
  var upperCase;
  var lowerCase;
  var nums;
  var specChars;
  var chosenSet;
  var password;
  
    // while loop requests user imput for password length and checks input for acceptable criteria
  while (trueFalse) {
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
  // Upper case letter check
  trueFalse = window.confirm("Should upper case letters be included?");
  if (trueFalse){
    upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  } else {
    upperCase = [];
  }
  // Lower case letter check
  trueFalse = window.confirm("Should lower case letters be included?");
  if (trueFalse) {
    lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  } else {
    lowerCase = [];
  }
// Number check
trueFalse = window.confirm("Should numbers be included?");
  if(trueFalse) {
    nums = ["0","1","2","3","4","5","6","7","8","9"];
  }else{
    nums=[];
  }
// Special letter check
trueFalse = window.confirm("Should special characters be included?");
  if (trueFalse) {
    specChars=["!","@","#","$","%","^","&","*","-","+","*"];
  }else{
    specChars=[];
  }
  // concatenate chosen characters into one set
  chosenSet = upperCase.concat(lowerCase.concat(nums.concat(specChars)));
  if (chosenSet = []){
    trueFalse=true
    alert("you need to select password characters");    
  }

}

// https://stackoverflow.com/questions/37287093/starting-a-javascript-prompt-after-a-button-is-clicked/37287126
// https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options
// https://www.w3schools.com/js/js_random.asp