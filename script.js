// Get the dice container
const diceContainer = document.querySelector('.dice-container');

// Get the roll button
const rollButton = document.getElementById('rollButton');

// Get all dice type elements
const diceTypeElements = document.querySelectorAll('.dice-type');

// Function to roll a single die of a given type
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Function to display a single die roll result
function displayDieResult(diceType, value) {
  const dieElement = document.createElement('div');
  dieElement.classList.add('die');
  dieElement.textContent = `${value} ${diceType}.`;
  const resultsContainer = document.getElementById(`${diceType}-results`);
  resultsContainer.appendChild(dieElement);
}

// Function to roll the dice
function rollDice() {
  // Clear previous results
  diceTypeElements.forEach(diceTypeElement => {
    const diceType = diceTypeElement.dataset.type;
    const resultsContainer = document.getElementById(`${diceType}-results`);
    resultsContainer.innerHTML = '';
  });

  // Loop through each dice type element
  diceTypeElements.forEach(diceTypeElement => {
    const diceType = diceTypeElement.dataset.type;
    const sides = parseInt(diceType.slice(2), 10); // Extract the number of sides
    const count = parseInt(diceTypeElement.querySelector('.count').textContent, 10);

    // Roll the selected number of dice for this type
    for (let i = 0; i < count; i++) {
      const value = rollDie(sides);
      displayDieResult(diceType, value);
    }
  });
}

// Add event listeners to increase/decrease buttons
diceTypeElements.forEach(diceTypeElement => {
  const decreaseButton = diceTypeElement.querySelector('.decrease');
  const increaseButton = diceTypeElement.querySelector('.increase');
  const countSpan = diceTypeElement.querySelector('.count');

  function updateCount(change) {
    let count = parseInt(countSpan.textContent, 10);
    count = Math.max(0, Math.min(6, count + change)); // Ensure count is between 0 and 6
    countSpan.textContent = count;
  }

  decreaseButton.addEventListener('click', () => updateCount(-1));
  increaseButton.addEventListener('click', () => updateCount(1));
});

// Add event listener to the roll button
rollButton.addEventListener('click', rollDice);
