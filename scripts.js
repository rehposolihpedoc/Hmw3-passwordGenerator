// I want to randomly generate passwords > the button must be clicked and questions must be asked before password is generated.
// I want the button to log the password in a textfield above it  > Return Value must be displayed in the textfield
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Assignment code here
/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria       > Create a promt function 
WHEN prompted for password criteria                           
THEN I select which criteria to include in the password                  > present all the options for password in the prompts
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters   > declare a variable with a number data type of 8 and name it distinctively
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters   > create variable [array] for lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected  > If else statement logic to ensure at least one character type is chosen or else return as null
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria > if else statement creates a return value that is displayed in the text field element
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page > decide if you want the password will be a prompt*/ 



// Get references to the #generate element
var passwordLength = 8; // 8 charachter length has to be at least
var choiceList = []; // choice list is anything that is a string

var specialCharacterList = ['!', '@','%','#','^','&','*','(',')','_','+','|','?','>']; // variable array list for special charachters
var capitalLettersList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; // variable array list for upper case letters
var lowerCaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // variable array list for lower case letters
var numberList = ['1','2','3','4','5','6','7','8','9','0']; // variable array list for numbers


//assignment code for output button
var generateBtn = document.querySelector("#generate"); // declaring how variable generateBtn will be connecting to button

// Write password to the #password input
function writePassword() {       // function writePassword is declared 
    var correctPrompts = getPrompts(); // inside of writePassword variable correctPrompts is declared
    if (correctPrompts) {        // after correctPrompts is declared it is put into an if statement
    var newPassword = generatePassword(); // variable newPassword is declared to = generatePassword() function declared below
    var passwordText = document.querySelector("#password") //variable passwordText is declared and is linked to id in text field document
    passwordText.value = newPassword;  // declaring that variable passwordText value is equals to newPassword variable 
    } else {    // else statements that passwordTest.value = array list
        passwordTest.value = []; 
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // declaring how variable and event listener will work together once clicked to generate the password

function getPrompts() {  // create a function called get prompts
    choiceList = ''; 

    passwordLength = prompt("SELECT LENGTH OF PASSWORD: 8-128 characters long");
   
    if (passwordLength < 8) { 
        alert("must be at least 8-128 digits. Try again.");
        return false;
    }
    if (passwordLength > 128){
        alert("must be at least 8-128 digits. Try again.");
        return false;
    }
    if (confirm("Do you need lower case letters?")) {
        choiceList = choiceList.concat(lowerCaseList);
    }
    if (confirm("Do you need UPPER case letters?")) {
        choiceList = choiceList.concat(capitalLettersList);
    }
    if (confirm("Do you need SPECIAL charachters?")) {
        choiceList = choiceList.concat(specialCharacterList);
    }
    if (confirm("Do you need NUMBERS?")) {
        choiceList = choiceList.concat(numberList);
}
return true;
}


function generatePassword () { // function declared for generatePassword 
    //generate password based on choices
    var password = ""; // variable for password declared and it is blank
    for(var i = 0; i < passwordLength; i++) {    
        var randomIndex = Math.floor(Math.random() * choiceList.length); // math methods math floor and math random are called
     password += choiceList[randomIndex]; // password = random number in the index given
    }
    return password; //output is password
}


// Function to generate combination of password 
