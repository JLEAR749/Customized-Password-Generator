// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// actually make the pw
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Write password to the #password input
function writePassword() {
  length = prompt("Please enter your password length must be between 8 and 128 characters");
  
  lowerCase = confirm("Do you want lowerCase?");
  console.log(lowerCase);

   upperCase = confirm("Do you want upperCase?");
  console.log(upperCase);

   number = confirm("Do you want number?");
  console.log(number);

   special = confirm("Do you want special character?");
  console.log(special);
}
//checks to see if length meets criteria
if (length < 8 || length > 128){
  alert ("Please try again.")

// make sure the user actually typed a number
var generatePassword = parseInt(length); 
  if (isNaN(length))
    alert("Please put in a number");
}

// Pick X random characters, where X is the length of the password

document.getElementById("password").value

//check to include all characters included to meet criteria 
if (upperCase)
  var passwordsection = passwordsection.concat(upperCase);

if (special)
  var passwordsection = passwordsection.concat(special);

if (number)
  var passwordsection = passwordsection.concat(number);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var p = "";
  for (var x = 0; x < length; x++) {
    p += passwordsection[Math.floor(Math.random() * passwordsection.length)];
    console.log(p);
  }
}
//array number
number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

//array lowercase letter
lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//array uppercase letters
passwordupperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//array special characters
passwordspecial: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"];