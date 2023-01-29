// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("Generate a password");
  var char = prompt("how many character? (min:8 max:128)")
  if (char < 8){

  }
  var upper = confirm("I want uppercase characters")
  if (upper == true) {

  }
  var lower = confirm("I want lowercase characters")
  if (lower == true) {
    
  }
  var numb = confirm("I want numbers")
  if(numb == true) {

  }
  var spec = confirm("I want special characters")
  if (spec == true) {

  }
  console.log(char)
  console.log(upper)
  console.log(lower)
  console.log(numb)
  console.log(spec)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
