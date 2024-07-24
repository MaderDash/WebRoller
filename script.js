document.getElementById('rollButton').addEventListener('click', function() {
	const diceTypes = [4, 6, 8, 10, 12, 20, 100];
	const dice = diceTypes[Math.floor(Math.random() * diceTypes.length)];
	const result = Math.floor(Math.random() * dice) + 1;
	document.getElementById('result').innerText = `You rolled a d${dice}: ${result}`;
});
