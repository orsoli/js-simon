/* Structure
    - Prepare html Css
    JS
    - Retrieve interested elements from DOM
    - Prepare a function to generate random nr
    - Create a loop to generate 5 different random nr and save in randomNumbers array variable already created
    - Start 30 seconds timer
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
    - Bonus Validation
*/

// --- Preparation Phase
// Retrieve elemnts from DOM
const messageElement = document.getElementById("message");
const timerFieldElement = document.querySelector(".timer-field");
const counterElement = timerFieldElement.querySelector(".counter");
const randomNumbersElement = timerFieldElement.querySelector(".random-numbers");
const userFieldElement = document.querySelector(".user-field");
const inputsFormElement = document.getElementById("inputs-form");
const formBtnElement = document.getElementById("form-btn");

// Create variables
let message; // Mesage variable
const min = 1; // Minimum number to create random numbers
const max = 100; // Maximum number to create random numbers
let second = 3; // The initialized number to countdown
const generatedNumbers = 5; // Times to generate random numbers
const randomNumbers = []; // Array to save diferent random numbers
const userNumbers = []; // Array to save user numbers
const commonNumbers = []; // Save the common numbers betwwen user and random nr

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

// Function to hidde elements
const hideElemets = (element) => {
  element.classList.remove("d-flex"); // remove d-flex class from timerFieldElement
  element.classList.add("d-none"); // Add d-none class from timerFieldElement
};
// Function to show elements
const showElemets = (element) => {
  element.classList.remove("d-none"); // Remove d-none class from timerFieldElement
  element.classList.add("d-flex"); // Add d-none class from timerFieldElement
};
// Function to create elements
/**
 *
 * @param {string} typeOf
 * @returns
 */
const createElements = (typeOf) => {
  newElement = document.createElement(typeOf);
  return newElement;
};

// Flag function to check if is includes
/**
 *
 * @param {*} includeIn // Element you want to chek if other element is included in.
 * @param {*} toInclude // Element yout want to chek if is included to another element
 * @returns {boolean} // Return true or fals
 */
const isIncludes = (includeIn, toInclude) => includeIn.includes(toInclude);

// --- Proccesing phase
// Create loop to generate diferent randomNumbers based on generatedNumbers variable
while (randomNumbers.length < generatedNumbers) {
  const randomNumber = generateRandomNumbers(max, min); // Generate random number
  if (!isIncludes(randomNumbers, randomNumber))
    randomNumbers.push(randomNumber); // Save in array if is not saved before
  console.log(randomNumber); // test print in concole
}

// Print in page random numbers
randomNumbersElement.innerText = randomNumbers;
// Start 30 secont timer in page
const interval = setInterval(onCountDown, 1000);

// Create time out
setTimeout(() => {
  clearInterval(interval); // Stop counting down when second = 0
  // Create inputs element based on generateNumbers
  for (let i = 0; i < generatedNumbers; i++) {
    const input = createElements("input"); // Create input form
    input.setAttribute("type", "number"); // Add type: number attribute
    input.required = true; // Add required attribute
    input.classList.add("form-control"); // Add class in new element
    inputsFormElement.appendChild(input); // Append child in dom element
  }
  // Hide timerField
  hideElemets(timerFieldElement);
  // Show user field
  showElemets(userFieldElement);
  // Change message
  message = "Insert the numbers you have memorized and confirm to match";
  messageElement.innerText = message;

  const inputElements = document.querySelectorAll("input"); // Retrieve from Dom all Input elements

  // Create a click btn event
  formBtnElement.addEventListener("click", () => {
    message = "You have matched";
    // Craete a loop to pass in each input element
    for (let i = 0; i < inputElements.length; i++) {
      const inputElement = inputElements[i]; // Save each input element
      userNumbers.push(parseInt(inputElement.value)); // Save in user number array

      // check if user number is included in random number
      if (isIncludes(randomNumbers, userNumbers[i]))
        commonNumbers.push(userNumbers[i]); // add in common numbers array
    }

    hideElemets(inputsFormElement); // Hide inputs form element
    messageElement.classList.add("fs-2"); // Add a class to change font size message element
    messageElement.innerText = `${message} ${commonNumbers.length} numbers : ${commonNumbers}`; // Print in page the message
    formBtnElement.innerText = "Retry"; // Change the text in btn

    console.log(randomNumbers); // Test print in console
    console.log(commonNumbers); // test print
  });
}, second * 1000);
