// Get all die elements
const dice = document.querySelectorAll('.die');

// Get the roll button
const rollButton = document.getElementById('rollButton');

// Define messages for each die value
const messages = {
  1: 'You rolled a 1!',
  2: 'You rolled a 2!',
  3: 'You rolled a 3!',
  4: 'You rolled a 4!',
  5: 'You rolled a 5!',
  6: 'You rolled a 6!'
};

// Function to roll the dice
function rollDice() {
  // Loop through each die
  dice.forEach((die) => {
    // Generate a random value between 1 and 6
    const value = Math.floor(Math.random() * 6) + 1;
    
    // Update the die value attribute
    die.setAttribute('data-value', value);
    
    // Get the message span element
    const messageSpan = die.querySelector('span');
    
    // Display the message
    messageSpan.textContent = messages[value];
  });
}

// Add event listener to the roll button
rollButton.addEventListener('click', rollDice);