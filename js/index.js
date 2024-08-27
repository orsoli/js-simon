/* Structure
    - Prepare html Css
    JS
    - Retrieve interested elements from DOM
    - Start 30 seconds timer
    - Prepare a function to generate random nr
    - Create a loop to generate 5 different random nr and save in randomNumbers array variable already created
    - Print the randomNumbers in page at random-numbers element

    - When time finish, second = 0 stop timer, hide timer field
    - Create 5 input elemnts
    - Appand these elements in inputs-form in Dom
    - Change the message
    - Show user-field
    - Create a submit form event 
    - In this event retrieve the inputs value
    - Check for each value if is included in rendomNumbers
    - Prepare result message and print in page in message element
    - Hidden inputs-form 
    - Change the button in restart buton
*/

// --- Preparation Phase
// Retrieve elemnts from DOM
const messageElement = document.getElementById("message");
const timerFieldElement = document.querySelector(".timer-field");
const counterElement = document.querySelector(".counter");
const randomNumbersElement = document.querySelector(".random-numbers");
const inputsFormElement = document.getElementById("inputs-form");

// Create variables
const min = 1; // Minimum number to create random numbers
const max = 100; // Maximum number to create random numbers
let second = 30; // The initialized number to countdown
const generatedNumbers = 5; // Times to generate random numbers
const randomNumbers = []; // Array to save diferent random numbers

// Define functions
const onCountDown = () => (counterElement.innerText = --second); // Create a function to decrement the second and print in page
// Function to generate a rendom nr
/**
 *
 * @param {number} max // From this number
 * @param {number} min // To this number
 * @returns {number}
 */
const generateRandomNumbers = (max, min) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// --- Proccesing phase
// Create loop to generate diferent randomNumbers based on generatedNumbers variable
while (randomNumbers.length === generatedNumbers) {
  const randomNumber = generateRandomNumbers(max, min); // Generate random number
  if (randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber); // Save in array if is not saved before
}

// Start 30 secont timer in page
setInterval(onCountDown, 1000);
