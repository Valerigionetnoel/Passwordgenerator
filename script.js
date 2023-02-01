// Assignment Code
var generateBtn = document.querySelector("#generate");

//Call the function "generatePassword".
function generatePassword() {

  //Does an alert at the top of the page.
  alert("Generate a password");

  //Does a variable out of the prompt and decide the length of the password. Gives an error and return to the main page if the character is less then 8 or more than 128.
  var charLength = prompt("how many character? (min:8 max:128)")
  if (charLength < 8 || charLength > 128){
    alert("Invalid number, try again")
    return("Invalid number, try again")
  }

  //Variable for the special character.
  var specChar = [
    '[', '`', '!', '@',  '#', '$', '%',
    '^', '&', '*', '(',  ')', '_', '+',
    '-', '=', '[', ']',  '{', '}', ';',
    "'", ':', '"', '\\', '|', ',', '.',
    '<', '>', '/', '?',  '~', ']', '/'
  ]

  //Variable for the uppercase character.
  var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  //Variable for the lowercase character.
  var lowerChar = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z']

  //Variable for the numbers.
  var numbChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  //Comfirm if we want uppercase character.
  var upper = confirm("I want uppercase characters")
 
  //Comfirm if we want lowercase character.
  var lower = confirm("I want lowercase characters")
 
  //Comfirm if we want numbers.
  var numb = confirm("I want numbers")
 
  //Comfirm if we want special character
  var spec = confirm("I want special characters")
 
  //Gives an error if you select nothing, and return to the main page.
  if (upper === false && lower === false && numb === false && spec === false) {
    alert("Invalid selection, try again")
    return("Invalid selection, try again")
  }

  // Makes a function to randomize the array.
  function getRandomIndex (arr) {
    var index = Math.floor(Math.random() * arr.length)
    var element = arr[index]
    return element
  }

  //Makes a variable to store the password.
  var store = "";

  // Make a for statement, that runs x number of time, x being the number we ask the in the prompt at the beginning of this function.
  for (var i = 0; i < charLength; i++) {
    
    //Makes a variable out of the random character we choose.
    var randChar = []

    //If we take upper character, run this code.
    if (upper === true) {
    
      //Add a random upper character to the variable.
       randChar.push(getRandomIndex(upperChar))
        }

    //If we take lower character, run this code.
    if (lower === true) {

      //Add a random lower character to the variable.
       randChar.push(getRandomIndex(lowerChar))
        }

    //If we take number, run this code.
    if (numb === true) {

      //Add a random number to the variable.
       randChar.push(getRandomIndex(numbChar))
        }

    //If we take special character, run this code.
    if (spec === true) {

      //Add a random special character to the variable.
         randChar.push(getRandomIndex(specChar))
        } 

        //Gets all the random character and store them.
       store += (getRandomIndex(randChar))
     }

// End the fonction, and give out what is inside the store variable.
return store;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
