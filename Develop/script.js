// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword = function(passwordlength) {
var lowerCaseletters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
var upperCaseletters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

var numberset = [0,1,2,3,4,5,6,7,8,9];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")"];

let permittedCharacters = [];

// stuff

  alert('Click OK or Cancel to select the criteria you want or do not want in your password. You need to select at least one');
  if(confirm('Lower Case Letter')) {permittedCharacters.push(lowerCaseletters[0],lowerCaseletters[1],lowerCaseletters[2],lowerCaseletters[3],lowerCaseletters[4],lowerCaseletters[5],lowerCaseletters[6],lowerCaseletters[7], lowerCaseletters[8],lowerCaseletters[9],lowerCaseletters[10],lowerCaseletters[11],lowerCaseletters[12],lowerCaseletters[13],lowerCaseletters[14],lowerCaseletters[15], lowerCaseletters[16],lowerCaseletters[17],lowerCaseletters[18],lowerCaseletters[19],lowerCaseletters[20],lowerCaseletters[21],lowerCaseletters[22],lowerCaseletters[23],lowerCaseletters[24], lowerCaseletters[25]);}
  if(confirm('Upper Case Letter')) {permittedCharacters.push(upperCaseletters[0],upperCaseletters[1],upperCaseletters[2], upperCaseletters[3], upperCaseletters[4],upperCaseletters[5],upperCaseletters[6],upperCaseletters[7],upperCaseletters[8],upperCaseletters[9],upperCaseletters[10],upperCaseletters[11],upperCaseletters[12],upperCaseletters[13], upperCaseletters[14], upperCaseletters[15],upperCaseletters[16],upperCaseletters[17],upperCaseletters[18],upperCaseletters[19],upperCaseletters[20], upperCaseletters[21],upperCaseletters[22],upperCaseletters[23],upperCaseletters[24],upperCaseletters[25]);}
  if(confirm("Numbers")) {permittedCharacters.push(numberset[0],numberset[1],numberset[2],numberset[3],numberset[4],numberset[5],numberset[6],numberset[7],numberset[8],numberset[9]);}
  if(confirm("Symbols")) {permittedCharacters.push(symbols[0],symbols[1],symbols[2],symbols[3],symbols[4],symbols[5],symbols[6],symbols[7],symbols[8],symbols[9]);}

  if(permittedCharacters.length < 1 ) {
    alert("You must select at least one Criteria");
    promptSettings ();
  }

var pwlength = function () {
  let length = prompt ("Input a length of your password between 1-15 characters");
  // add conditional
  if (!isNaN(length) && length>=1 && length<=15) {
    return length;
  }
  else {
    alert("please try again with a number from the valid range");
    return pwlength
  }

}
var generatePassword = function(permittedCharacters,passwordlength) {
  let password = "";
  for (let i=0; i< passwordlength; i++) {
    password+= permittedCharacters [Math.floor(Math.random()*permittedCharacters.length)];
  }
  return password;


}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var rungenerator = function () {
    promptSettings();
    pwlength();
    generatePassword();
    writePassword();
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

