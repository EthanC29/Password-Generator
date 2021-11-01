// Assignment code here

// Arrays of letters, numbers and special characters
var lowercaseCharacter = [
    "a", 
    "b", 
    "c", 
    "d", 
    "e", 
    "f", 
    "g", 
    "h", 
    "i", 
    "j", 
    "k", 
    "l", 
    "m", 
    "n", 
    "o", 
    "p", 
    "q", 
    "r", 
    "s", 
    "t", 
    "u", 
    "v", 
    "w", 
    "x", 
    "y", 
    "z"
];
var uppercaseCharacter = [
    "A", 
    "B", 
    "C", 
    "D", 
    "E", 
    "F", 
    "G", 
    "H", 
    "I", 
    "J", 
    "K", 
    "L", 
    "M", 
    "N", 
    "O", 
    "P", 
    "Q", 
    "R", 
    "S", 
    "T", 
    "U", 
    "V", 
    "W", 
    "X", 
    "Y", 
    "Z"
];
var numericCharacter = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9", 
    "0"
];
var specialCharacter = [
    " ", 
    "!", 
    "#", 
    "$", 
    "%", 
    "&", 
    "'", 
    "(", 
    ")", 
    "*", 
    "+", 
    ",", 
    "-", 
    ".", 
    "/", 
    ":", 
    ";", 
    "<", 
    "=", 
    ">", 
    "?", 
    "@", 
    "[", 
    "]", 
    "^", 
    "_", 
    "`", 
    "{", 
    "|", 
    "}", 
    "~"
];

if (generateBtn) {

    var generatePassword = function() {

        var passwordLength = function() {
            var passwordLengthRequest = window.prompt("How many characters long would you like your password to be?");
            if (passwordLengthRequest < 8 || passwordLengthRequest > 128) {
                window.alert("Please enter an integer of at least 8 and no more than 128")
                localStorage.removeItem("passwordLengthRequest");
                passwordLength();
            }
            else if (passwordLengthRequest > 8 && passwordLengthRequest < 128) {
                window.alert("You chose a length of " + passwordLengthRequest + " characters")
            }
            else {
                window.alert("Please enter an integer of at least 8 and no more than 128")
            }
        }


    }

}
    







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

