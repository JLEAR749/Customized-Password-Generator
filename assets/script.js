//array number
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

//array lowercase letter
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//array uppercase letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//array special characters
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"];

var generateBtn = document.querySelector("#generate")

// actually make the pw
function displaypassword() {
  let password = generatePassword();
  console.log(password)

  let passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Write password to the #password  checking the criteria for the password length
function passwrodInput() {
  var length = parseInt(prompt("Please enter your password length must be between 8 and 128 characters"));
  //alert user to type the length of character from 8-128
  while (length < 8 || length > 128 || (isNaN(length))) {
    length = parseInt(prompt("Please enter your password length must be between 8 and 128 characters"));
  }

  //do you want lowerCase
  var lowerCase = confirm("Do you want lowerCase?");
  console.log(lowerCase);

  //do you want upperCase
  var upperCase = confirm("Do you want upperCase?");
  console.log(upperCase);

  //do you want numbers
  var number = confirm("Do you want number?");
  //check the user input its a number
  console.log(number);

  //do you want special characters
  var special = confirm("Do you want special character?");
  console.log(special);
  return {
    length,
    lowerCase,
    upperCase,
    special,
    number,
  }
}

//generate password
function generatePassword() {
  console.log("testing")

  var options = passwrodInput()
  var password = []
  var characteroptions = []
  var musthavecharacter = []
  if (options.lowerCase) {
    characteroptions = characteroptions.concat(lowerCase)
    musthavecharacter.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
  }

  if (options.upperCase) {
    characteroptions = characteroptions.concat(upperCase)
    musthavecharacter.push(upperCase[Math.floor(Math.random() * upperCase.length)])
  }
  if (options.number) {
    characteroptions = characteroptions.concat(number)
    musthavecharacter.push(number[Math.floor(Math.random() * number.length)])
  }

  if (options.special) {
    characteroptions = characteroptions.concat(special)
    musthavecharacter.push(special[Math.floor(Math.random() * special.length)])
  }
  for (let i = 0; i < options.length - musthavecharacter.length; i++) {
    password.push(characteroptions[Math.floor(Math.random() * characteroptions.length)])
  }
  password = password.concat(musthavecharacter)
  console.log(password)

  return password.join("")
}
// Add event listener to generate button
generateBtn.addEventListener("click", displaypassword);