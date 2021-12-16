// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


var characterAmount;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSymbols;


var UPPERCASE_CODES  = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LOWERCASE_CODES = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var NUMBER_CODES = [0,1,2,3,4,5,6,7,8,9,];
var SYMBOL_CODES = ["!","@","#","$","%","^","&","*","(",")"];


// Generating Character Codes From Array Loop
//const UPPERCASE_CODES = [A,B,C,D,E,F,G,H,J,K,L,M,N,O,PQRSTUVWXYZ]
//const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
//const NUMBER_CODES = arrayFromLowToHigh(48, 57);
//const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
//  .concat(arrayFromLowToHigh(58, 64))
//  .concat(arrayFromLowToHigh(91, 96))
// .concat(arrayFromLowToHigh(123, 126));




function getUSerInput() {


  characterAmount = +window.prompt("How many characters would you like? (8  - 128)");
  if (characterAmount < 8 || characterAmount > 128) {
    alert("invalid entry");
  }
  else {
  includeLowercase = window.confirm("Do you want to include Lowercase characters?");
  includeUppercase = window.confirm("Do you want to include Uppercase characters?");
  includeNumbers = window.confirm("do you want any numerical characters?");
  includeSymbols = window.confirm("Do you want any special Characters such as '@' or '#'");


  return generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols)
  

}
}

// Write password to the #password input
function generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  var charCodes = [];
  // if (characterAmount >= 8 && characterAmount <= 128) {
  if (includeLowercase == true) charCodes = charCodes.concat(LOWERCASE_CODES);
  if (includeUppercase == true) { charCodes = charCodes.concat(UPPERCASE_CODES) }
  if (includeNumbers == true) { charCodes = charCodes.concat(NUMBER_CODES) }
  if (includeSymbols == true) charCodes = charCodes.concat(SYMBOL_CODES)
console.log(charCodes);


  const passwordCharacters = []

  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(characterCode)
  }
  return passwordCharacters.join('');

}

// Character Code Generating Function >>> no longer using this function 
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};


function writePassword() {
  var password = getUSerInput();
 // getUSerInput();
  // generatePassword();
  
 // var password = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  passwordText.innerHTML = password;

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

