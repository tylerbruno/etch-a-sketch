const container = document.querySelector("#container");
const changeSizeButton = document.querySelector("#change-size");
const clearGridButton = document.querySelector("#clear");
let numberOfSquaresInGrid = 16;


changeSizeButton.addEventListener("click", () => {
    let requestedSize = Number(prompt("How many squares would you like in each row/column? No bigger than 100."));

    if (requestedSize > 100) {
        alert("Can't be greater than 100.");
    } else if (isNaN(requestedSize)) {
        alert("Please enter a valid number");
    } else {
        for (let i = 0; i < numberOfSquaresInGrid; i++) {
            const divContainer = document.querySelector("#container > div");
            divContainer.remove();
        }
        createGrid(requestedSize);
        numberOfSquaresInGrid = requestedSize;
    }

});

clearGridButton.addEventListener("click", () => {
    for (let i = 0; i < numberOfSquaresInGrid; i++) {
        const divContainer = document.querySelector("#container > div");
        divContainer.remove();
    }
    createGrid(numberOfSquaresInGrid);
});



const createGrid = (numberOfSquares) => {
    for (let i = 0; i < numberOfSquares; i++) {
        const div = document.createElement("div");
        div.style.cssText = `display: flex; margin: 0; height: ${500/numberOfSquares}px; outline: 1px solid black;`;
        container.appendChild(div);
    
        for (let j = 0; j < numberOfSquares; j++) {
            const squares = document.createElement("div");
            squares.style.cssText = "flex: 1; outline: 1px solid black; margin: 0;";
            div.appendChild(squares);
    
            squares.addEventListener("mouseover", () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                squares.style.backgroundColor = "#" + randomColor;
            });
        }
    }
}

createGrid(numberOfSquaresInGrid);

