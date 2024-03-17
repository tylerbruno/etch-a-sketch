const container = document.querySelector("#container");
const changeSizeButton = document.querySelector("#change-size");
const clearGridButton = document.querySelector("#clear");
let numberOfSquaresInGrid = 16;


changeSizeButton.addEventListener("click", () => {
    let requestedSize = Number(prompt("How many squares would you like in each row/column? No bigger than 100."));

    validateEntry(requestedSize);

});

clearGridButton.addEventListener("click", () => {
    container.innerHTML = '';
    createGrid(numberOfSquaresInGrid);
});

const validateEntry = (entry) => {
    if (entry > 100) {
        alert("Please enter a number between 1 and 100.");
    } else if (isNaN(entry)) {
        alert("Please enter a valid number");
    } else if (entry < 1) {
        alert("Please enter a number between 1 and 100.")
    } else {
        for (let i = 0; i < numberOfSquaresInGrid; i++) {
            const divContainer = document.querySelector("#container > div");
            divContainer.remove();
        }
        createGrid(entry);
        numberOfSquaresInGrid = entry;
    }
}


const createGrid = (numberOfSquares) => {
    for (let i = 0; i < numberOfSquares; i++) {
        const div = document.createElement("div");
        div.style.cssText = `display: flex; margin: 0; height: ${500/numberOfSquares}px; outline: 1px solid black;`;
        container.appendChild(div);
    
        for (let j = 0; j < numberOfSquares; j++) {
            const square = document.createElement("div");
            square.style.cssText = "flex: 1; outline: 1px solid black; margin: 0; background: white;";
            div.appendChild(square);
    
            square.addEventListener("mouseover", () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                square.style.backgroundColor = "#" + randomColor;
            });
        }
    }
}

createGrid(numberOfSquaresInGrid);

