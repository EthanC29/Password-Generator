// Assignment code here

// Arrays of letters, numbers and special characters
var lowercaseCharacter = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var uppercaseCharacter = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var numericCharacter = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];
var specialCharacter = [
    "!", "#", "$", "%", "&", "-", "?", "@", "_", 
];
var arrayList;

// function that generates the password
var generatePassword = function() {

    // declaring variables
    var passwordLengthRequest;
    var characterUppercaseRequest;
    var characterLowercaseRequest;
    var characterNumericRequest;
    var characterSpecialRequest;

    // password length
    var passwordLength = function() {
        passwordLengthRequest = window.prompt("How many characters long would you like your password to be?");
        if (passwordLengthRequest < 8 || passwordLengthRequest > 128) {
            window.alert("Please enter an integer of at least 8 and no more than 128")
            passwordLength();
        }
        else if (passwordLengthRequest > 8 && passwordLengthRequest < 128) {
            window.alert("You chose a length of " + passwordLengthRequest + " characters")
        }
        else {
            window.alert("Please enter an integer of at least 8 and no more than 128")
            passwordLength();
        };
        return;
    }
    passwordLength();

    // choosing character types and joining the applicable arrays together into a single array
    // uppercase letters
    var characterUppercase = function() {
        characterUppercaseRequest = window.prompt('Would you like to include uppercase characters? Please enter "YES" or "NO"');
        if (characterUppercaseRequest === "YES" || characterUppercaseRequest === "yes" || characterUppercaseRequest === "Yes") {
            arrayList = arrayList.concat(uppercaseCharacter);
            window.alert("Uppercase characters will be included");
        }
        else if (characterUppercaseRequest === "NO" || characterUppercaseRequest === "no" || characterUppercaseRequest === "No") {
            window.alert("Uppercase characters will NOT be included");
        }
        else {
            window.alert("Please enter a valid response");
            characterUppercase();
        };
        return;
    }
    characterUppercase();

    // lowercase letters
    var characterLowercase = function() {
        characterLowercaseRequest = window.prompt('Would you like to include lowercase characters? Please enter "YES" or "NO"');
        if (characterLowercaseRequest === "YES" || characterLowercaseRequest === "yes" || characterLowercaseRequest === "Yes") {
            arrayList = arrayList.concat(lowercaseCharacter);
            window.alert("Lowercase characters will be included");
        }
        else if (characterLowercaseRequest === "NO" || characterLowercaseRequest === "no" || characterLowercaseRequest === "No") {
            window.alert("Lowercase characters will NOT be included");
        }
        else {
            window.alert("Please enter a valid response");
            characterLowercase();
        };
        return;
    }
    characterLowercase();

    // numbers
    var characterNumeric = function() {
        characterNumericRequest = window.prompt('Would you like to include numbers? Please enter "YES" or "NO"');
        if (characterNumericRequest === "YES" || characterNumericRequest === "yes" || characterNumericRequest === "Yes") {
            arrayList = arrayList.concat(numericCharacter);
            window.alert("Numbers will be included");
        }
        else if (characterNumericRequest === "NO" || characterNumericRequest === "no" || characterNumericRequest === "No") {
            window.alert("Numbers will NOT be included");
        }
        else {
            window.alert("Please enter a valid response");
            characterNumeric();
        };
        return;
    }
    characterNumeric();

    // special characters
    var characterSpecial = function() {
        characterSpecialRequest = window.prompt('Would you like to include special characters? Please enter "YES" or "NO"');
        if (characterSpecialRequest === "YES" || characterSpecialRequest === "yes" || characterSpecialRequest === "Yes") {
            arrayList = arrayList.concat(specialCharacter);
            window.alert("Special characters will be included");
        }
        else if (characterSpecialRequest === "NO" || characterSpecialRequest === "no" || characterSpecialRequest === "No") {
            window.alert("Special characters will NOT be included");
        }
        else {
            window.alert("Please enter a valid response");
            characterSpecial();
        };
        return;
    }
    characterSpecial();


    // pick a random character from the array x times, where x is the length of the password, and apply it to the joined array
    // Thanks to Ben Aubin (https://stackoverflow.com/a/33906108/16940312)
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)];
    };

    var finalArray;

    for (var i = 0; i < passwordLengthRequest; i++) {
        finalArray[i] = arrayList.sample();
    };

    // transforms array into a string without commas
    // Thanks to Ritika (https://thispointer.com/convert-array-to-string-without-comma-in-javascript/)
    let passwordString = finalArray.join("");


    // return final series of letters/numbers/characters
    return (passwordString);
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