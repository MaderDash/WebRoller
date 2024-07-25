// Define the dice types
const diceTypes = [
  { name: 'D-100', sides: 100, message: 'You rolled a {value} on the D-100.' },
  { name: 'D-20', sides: 20, message: 'You rolled a {value} on the D-20.' },
  { name: 'D-12', sides: 12, message: 'You rolled a {value} on the D-12.' },
  { name: 'D-10', sides: 10, message: 'You rolled a {value} on the D-10.' },
  { name: 'D-6', sides: 6, message: 'You rolled a {value} on the D-6.' },
  { name: 'D-4', sides: 4, message: 'You rolled a {value} on the D-4.' }
];

// Get all die elements
const dice = document.querySelectorAll('.die');

// Get the roll button
const rollButton = document.getElementById('rollButton');

// Function to roll the dice
function rollDice() {
  // Loop through each die
  dice.forEach((die, index) => {
    // Get the current die type
    const dieType = diceTypes[index];

    // Generate a random value between 1 and the number of sides
    const value = Math.floor(Math.random() * dieType.sides) + 1;

    // Update the die value attribute
    die.setAttribute('data-value', value);

    // Get the message span element
    const messageSpan = die.querySelector('span');

    // Display the message
    messageSpan.textContent = dieType.message.replace('{value}', value);
  });
}

// Add event listener to the roll button
rollButton.addEventListener('click', rollDice);