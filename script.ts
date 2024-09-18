const number1 = document.getElementById("num1") as HTMLInputElement
const printButton = document.getElementById("printBtn") as HTMLButtonElement 
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement 

const printEnteredValue = (): void => {
  const numb1 = parseFloat(number1.value);
  printValue.textContent = numb1.toString();
}

printButton.addEventListener("click", printEnteredValue);







console.log('Hello, world! 🙌');

//finna út hér fyrir neðan hvað fólk er í "dog years"

let aged = true;
let realAge = 0;

if (aged) {
  realAge = 4;
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);

// fyrir neðan var vitlaust skrifað Length og það vantaði uppercase C í toUpperCase

const firstName = 'muriel!';

console.log(firstName.toUpperCase());

console.log(firstName.length);

// Hér fyrir neðan er verið að sýna að typescript hefur ekki neitt á móti því að við gefum variable tvö assignment

let guess;

guess = "blue";
guess = 2;

// hér fyrir neðan er verið að kenna okkur að gefa variable eitthvað ákveðið hlutverk. Í þessu tilfalli þá er það string

let phoneNumber:string;

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = "7167762323";
}
