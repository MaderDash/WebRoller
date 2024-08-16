const diceContainer = document.querySelector("#dice-container");
const rollButton = document.getElementById("rollButton");
const diceTypeElements = document.querySelectorAll(".dice-type");
const cardsContainer = document.getElementById("cards-container");
const drawCardsButton = document.getElementById("drawCardsButton");

function rollDie(sides) {
  if (sides === 100) {
    return Math.floor(Math.random() * 100) + 1;
  } else if (sides === 4) {
    return Math.floor(Math.random() * 4) + 1;
  }
  return Math.floor(Math.random() * sides) + 1;
}

function displayDieResult(diceType, value) {
  // Create a container for this specific die roll
  const dieContainer = document.createElement("div"); 
  dieContainer.classList.add("die"); 
  dieContainer.textContent = value;
  
  // Append the container to the results area
  document.getElementById(`${diceType}-results`).appendChild(dieContainer);
}

function rollDice() {
  diceTypeElements.forEach((element) => {
    // Get the results container for this specific dice type
    const resultsContainer = document.getElementById(`${element.dataset.type}-results`);

    // Clear the results for this dice type
    resultsContainer.innerHTML = '';

    const diceType = element.dataset.type;
    const count = parseInt(element.querySelector(".count").textContent, 10);
    const sides = parseInt(diceType.split("-")[1], 10);

    for (let i = 0; i < count; i++) {
      const value = rollDie(sides);
      displayDieResult(diceType, value);
    }
  });
}




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

function getRandomCard() {
  const selectedFolder = document.getElementById('folderSelect').value;
  const cardNumber = (Math.floor(Math.random() * 120) + 1).toString().padStart(3, '0');
  return `${selectedFolder}/${selectedFolder}_${cardNumber}.jpg`;
}

function displayRandomCards() {
  const cardDisplayArea = document.getElementById('cardDisplayArea') || document.createElement("div");
  cardDisplayArea.id = 'cardDisplayArea';
  cardDisplayArea.innerHTML = '';
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
