// Get containers for the grid section
const contEl = document.querySelector(".container");
const genBtn = document.getElementById("gen");
const gridSize = document.getElementById("gridsize");

// Get element by id for every color button 
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const purpleBtn = document.getElementById("purple");
const yellowBtn = document.getElementById("yellow");
const orangeBtn = document.getElementById("orange");
const greenBtn = document.getElementById("green");

// Function to generate grid based on size
function generateGrid(size) {

    for (let i = 1; i <= size*size; i++) {
        const gridEl = document.createElement("div");
        gridEl.className = "grid";
        gridEl.style.width = `${650/size}px`;
        gridEl.style.height = `${650/size}px`;
        contEl.appendChild(gridEl);
    }
}

// Event listener for the "GENERATE GRID" button
genBtn.addEventListener("click", function() {
    const gridSquare = document.querySelectorAll(".grid");
    if (typeof gridSquare !== "undefined") {
        for (let i = 0; i < gridSquare.length; i++) {
            contEl.removeChild(gridSquare[i]);
        }
    }

    let newSize = gridSize.value;
    if (newSize > 100) {
        alert("Maximum grid size is 100");
    } else {
        generateGrid(newSize);
        enableEdit("rgb(0, 65, 151)");
        alert(`Grid of size ${newSize}px has been generated!`);
    }
})

// Function to enable the mouse hover effect based on color
function enableEdit(color) {
    const gridSquare = document.querySelectorAll(".grid");

    for (let i = 0; i < gridSquare.length; i++) {
        gridSquare[i].addEventListener("mouseover", function() {
        gridSquare[i].style.background = color;
    });
    }
}


// Event listeners for color buttons
redBtn.addEventListener("click", function() {
    enableEdit("rgb(151, 0, 0)");
});

yellowBtn.addEventListener("click", function() {
    enableEdit("rgb(223, 182, 0)");
});

blueBtn.addEventListener("click", function() {
    enableEdit("rgb(0, 65, 151)");
});

purpleBtn.addEventListener("click", function() {
    enableEdit("rgb(91, 0, 151)");
});

orangeBtn.addEventListener("click", function() {
    enableEdit("rgb(151, 60, 0)");
});

greenBtn.addEventListener("click", function() {
    enableEdit("rgb(5, 151, 0)");
});
