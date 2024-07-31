// Get DOM elements
const diceContainer = document.querySelector(".dice-container");
const rollButton = document.getElementById("rollButton");
const diceTypeElements = document.querySelectorAll(".dice-type");
const cardsContainer = document.getElementById("cards-container");
const drawCardsButton = document.getElementById("drawCardsButton");

// --- Dice Rolling Functionality ---

// Function to roll a single die
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Function to display a single die roll result
function displayDieResult(diceType, value) {
  const dieElement = document.createElement("div");
  dieElement.classList.add("die");
  dieElement.textContent = value;
  document.getElementById(`${diceType}-results`).appendChild(dieElement);
}

// Function to handle rolling all selected dice
function rollDice() {
  diceTypeElements.forEach((diceTypeElement) => {
    const diceType = diceTypeElement.dataset.type;
    const sides = parseInt(diceType.slice(2), 10);
    const count = parseInt(
      diceTypeElement.querySelector(".count").textContent,
      10
    );

    // Clear previous results and roll new dice
    const resultsContainer = document.getElementById(`${diceType}-results`);
    resultsContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
      displayDieResult(diceType, rollDie(sides));
    }
  });
}

// Event listeners for increasing/decreasing dice counts
diceTypeElements.forEach((diceTypeElement) => {
  const increaseButton = diceTypeElement.querySelector(".increase");
  const decreaseButton = diceTypeElement.querySelector(".decrease");
  const countElement = diceTypeElement.querySelector(".count");

  increaseButton.addEventListener("click", () => {
    countElement.textContent = parseInt(countElement.textContent, 10) + 1;
  });

  decreaseButton.addEventListener("click", () => {
    const currentCount = parseInt(countElement.textContent, 10);
    countElement.textContent = currentCount > 0 ? currentCount - 1 : 0;
  });
});

rollButton.addEventListener("click", rollDice);

// --- Card Drawing Functionality ---

// Function to get a random card image path
function getRandomCard() {
  const selectedFolder = document.getElementById('folderSelect').value;
  const cardNumber = (Math.floor(Math.random() * 120) + 1).toString().padStart(3, '0');
  return `${selectedFolder}/${selectedFolder}_${cardNumber}.jpg`;
}


// Function to display random cards
function displayRandomCards() {
  const cardDisplayArea = document.getElementById('cardDisplayArea') || document.createElement("div");
  cardDisplayArea.id = 'cardDisplayArea';
  cardDisplayArea.innerHTML = ''; // Clear previous cards
  const totalCards = 3;

  for (let i = 0; i < totalCards; i++) {
    const cardImg = document.createElement("img");
    cardImg.src = getRandomCard();
    cardImg.classList.add("card");
    cardDisplayArea.appendChild(cardImg);
  }

  if (!document.getElementById('cardDisplayArea')) {
    cardsContainer.insertBefore(cardDisplayArea, drawCardsButton);
  }
}



drawCardsButton.addEventListener("click", displayRandomCards);
