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
var arrayList = [];

if (generateBtn) {

    var generatePassword = function() {

        // password length
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
                passwordLength();
            }
        }
        passwordLength();

        // character types
        var characterUppercase = function() {
            var characterUppercaseRequest = window.prompt('Would you like to include uppercase characters? Please enter "YES" or "NO"');
            if (characterUppercaseRequest === "YES" || characterUppercaseRequest === "yes") {
                window.alert("Uppercase characters will be included");
            }
            else if (characterUppercaseRequest === "NO" || characterUppercaseRequest === "no") {
                window.alert("Uppercase characters will not be included");
            }
            else {
                window.alert("Please enter a valid response");
                localStorage.removeItem("characterUppercaseRequest");
                characterUppercase();
            }
        }
        characterUppercase();

        var characterLowercase = function() {
            var characterLowercaseRequest = window.prompt('Would you like to include lowercase characters? Please enter "YES" or "NO"');
            if (characterLowercaseRequest === "YES" || characterLowercaseRequest === "yes") {
                window.alert("Lowercase characters will be included");
            }
            else if (characterLowercaseRequest === "NO" || characterLowercaseRequest === "no") {
                window.alert("Lowercase characters will not be included");
            }
            else {
                window.alert("Please enter a valid response");
                localStorage.removeItem("characterLowercaseRequest");
                characterLowercase();
            }
        }
        characterLowercase();

        var characterNumeric = function() {
            var characterNumericRequest = window.prompt('Would you like to include numbers? Please enter "YES" or "NO"');
            if (characterNumericRequest === "YES" || characterNumericRequest === "yes") {
                window.alert("Numbers will be included");
            }
            else if (characterNumericRequest === "NO" || characterNumericRequest === "no") {
                window.alert("Numbers will not be included");
            }
            else {
                window.alert("Please enter a valid response");
                localStorage.removeItem("characterNumericRequest");
                characterNumeric();
            }
        }
        characterNumeric();

        var characterSpecial = function() {
            var characterSpecialRequest = window.prompt('Would you like to include special characters? Please enter "YES" or "NO"');
            if (characterSpecialRequest === "YES" || characterSpecialRequest === "yes") {
                window.alert("Special characters will be included");
            }
            else if (characterSpecialRequest === "NO" || characterSpecialRequest === "no") {
                window.alert("Special characters will not be included");
            }
            else {
                window.alert("Please enter a valid response");
                localStorage.removeItem("characterSpecialRequest");
                characterSpecial();
            }
        }
        characterSpecial();

        // consolidating a list of all approved arrays
        if (characterUppercaseRequest) {
            var arrayList = arrayList.concat(uppercaseCharacter);
        }
        if (characterLowercaseRequest) {
            var arrayList = arrayList.concat(lowercaseCharacter);
        }
        if (characterNumericRequest) {
            var arrayList = arrayList.concat(numericCharacter);
        }
        if (characterSpecialRequest) {
            var arrayList = arrayList.concat(specialCharacter);
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

