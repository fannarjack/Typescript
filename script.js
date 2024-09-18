var number1 = document.getElementById("num1");
var printButton = document.getElementById("printBtn");
var printValue = document.getElementById("enteredNumber");
function printEnteredValue() {
    var numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();
}
printButton.addEventListener("click", printEnteredValue);
console.log('Hello, world! 🙌');
//finna út hér fyrir neðan hvað fólk er í "dog years"
var aged = true;
var realAge = 0;
if (aged) {
    realAge = 4;
}
var dogAge = realAge * 7;
console.log("".concat(dogAge, " years"));
// fyrir neðan var vitlaust skrifað Length og það vantaði uppercase C í toUpperCase
var firstName = 'muriel!';
console.log(firstName.toUpperCase());
console.log(firstName.length);
// Hér fyrir neðan er verið að sýna að typescript hefur ekki neitt á móti því að við gefum variable tvö assignment
var guess;
guess = "blue";
guess = 2;
// hér fyrir neðan er verið að kenna okkur að gefa variable eitthvað ákveðið hlutverk. Í þessu tilfalli þá er það string
var phoneNumber;
if (Math.random() > 0.5) {
    phoneNumber = '+61770102062';
}
else {
    phoneNumber = "7167762323";
}
