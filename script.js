// Assignment Code
var generateBtn = document.querySelector("#generate");
var charCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNoCaps = "abcdefghijklmnopqrstuvwxyz";
var charNumbers = "0123456789";
var charSymbols = "!@#$%&";
var chosenChar = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
 //length 
  var length = prompt("How long is the password?");
//Caps 
  var caps = confirm("Are you using caps?");
  var noCaps = confirm("Are you not using caps?");
 //No Caps
 //Numbers
  var numbers = confirm("will you be adding numbers?");
 //Symbols
  var symbols = confirm("will you be adding symbols?");
 // Randomly choose a character x times
 if(caps === true) {
  chosenChar += charCaps;
 }
 if(noCaps === true) {
  chosenChar += charNoCaps;
 }
 if(numbers === true) {
  chosenChar += charNumbers;
 }
 if(symbols === true) {
  chosenChar += charSymbols;
}
 var password = ""
for(var i = 0; i < length; i++) {
  var index = Math.floor(Math.random()*chosenChar.length)
  var char = chosenChar[index]
  password += char
}
return password
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
