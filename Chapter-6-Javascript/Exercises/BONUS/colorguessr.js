document.addEventListener("DOMContentLoaded", function() {
    const numColors = 4;
    const maxAttempts = 3;
    let colors = generateRandomColors(numColors);
    let pickedColor = pickColor();
    const colorDisplay = document.getElementById("rgb");
    const colorPalette = document.getElementById("color-palette");
    const attemptCountDisplay = document.getElementById("attempt-count");
    const resetButton = document.getElementById("reset");
    let attempts = 0;
    let score = 0;

    colorDisplay.textContent = pickedColor;

    function resetGame() {
        attempts = 0;
        updateAttemptDisplay();
        colors = generateRandomColors(numColors);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        updateColorPalette();
        score = 0;
    }

    function generateRandomColors(num) {
        const arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }

    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function pickColor() {
        const random = Math.floor(Math.random() * numColors);
        return colors[random];
    }

    function handleClick(clickedColor) {
        attempts++;
        updateAttemptDisplay();
        if (attempts >= maxAttempts) {
            // Game over logic
            // You can add your logic here for game over
            resetGame();
        }
        if (clickedColor === pickedColor) {
            score++;
            resetGame();
        }
    }

    function updateColorPalette() {
        colorPalette.innerHTML = "";
        for (let i = 0; i < numColors; i++) {
            const colorBox = document.createElement("div");
            colorBox.classList.add("color-box");
            colorBox.style.backgroundColor = colors[i];
            colorBox.addEventListener("click", function() {
                handleClick(this.style.backgroundColor);
            });
            colorPalette.appendChild(colorBox);
        }
    }

    function updateAttemptDisplay() {
        attemptCountDisplay.textContent = attempts ;
    }

    resetButton.addEventListener("click", function() {
        resetGame();
    });

    resetGame(); // Initialize the game
});
