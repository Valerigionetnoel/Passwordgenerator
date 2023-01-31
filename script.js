// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("Generate a password");
  var charLength = prompt("how many character? (min:8 max:128)")
  if (charLength < 8 || charLength>128){
    generatePassword()
  }
  var specChar = [
    '[', '`', '!', '@',  '#', '$', '%',
    '^', '&', '*', '(',  ')', '_', '+',
    '-', '=', '[', ']',  '{', '}', ';',
    "'", ':', '"', '\\', '|', ',', '.',
    '<', '>', '/', '?',  '~', ']', '/'
  ]

  var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  var lowerChar = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z']

  var numbChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  var upper = confirm("I want uppercase characters")
 
  var lower = confirm("I want lowercase characters")
 
  var numb = confirm("I want numbers")
 
  var spec = confirm("I want special characters")
 
  if (upper === false && lower === false && numb === false && spec === false) {
    generatePassword()
  }

  function getRandomIndex (arr) {
    var index = Math.floor(Math.random() * arr.length)
    var element = arr[index]
    return element
  }
  console.log(getRandomIndex(upperChar))

  for (var i = 0; i < charLength; i++) {
    
  }

  console.log(charLength)
  console.log(upper)
  console.log(lower)
  console.log(numb)
  console.log(spec)
  return "hello"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
