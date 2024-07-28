# WebRoller
//TODO I need to add a clear button to return all of the buttons back to 0.
//TODO I should have all the buttons preset to 1,
//TODO I need to add a way to select the folder I want to choose my images from.
//TODO Add the random image puller, so it will pull 3 images.
//TODO make the image get larger when I mouse over them.

```
<!DOCTYPE html>
<html>
  <head>
    </head>
  <body>
    <div class="container">
      <div class="dice-selection">
        </div>
      <div class="dice-container"></div>
      <div id="cards-container" class="cards-container">
        <select id="folderSelect">
          <option value="GMA Fantasy VTT">GMA Fantasy VTT</option>
          <option value="Folder 2">Folder 2</option> 
          <option value="Folder 3">Folder 3</option>
          <!-- Add more options for additional folders -->
        </select>
        <button id="drawCardsButton">Draw Cards</button>
      </div>
      
    </div>
    <script src="script.js"></script>
  </body>
</html>




// ... (rest of your script.js code)

// Function to get a random card image path
function getRandomCard() {
  const selectedFolder = document.getElementById('folderSelect').value;
  const cardNumber = Math.floor(Math.random() * 120) + 1; // Assuming 120 images per folder
  return `${selectedFolder}/GMA Fantasy VTT_Part${cardNumber}.jpg`; 
}

// ... (rest of your script.js code)
```