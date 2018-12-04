// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
    e.preventDefault();
    const table = document.getElementById("pixelCanvas");
    table.innerHTML = "";
    let gridHeight = document.getElementById("inputHeight").value;
    let gridWidth = document.getElementById("inputWidth").value;

    for (let x = 0; x < gridHeight; x++) {
        let rows = document.createElement("tr");
        for (y = 0; y < gridWidth; y++) {
            let cells = document.createElement("td");
            cells.classList.add("cell")
            rows.appendChild(cells);
        }
        table.appendChild(rows);
        rows.classList.add("row");   
    }
    
    let cells = document.getElementsByClassName("cell");
    for (cell of cells) {
        cell.addEventListener("click", bgChange);
    }
    
}

function bgChange(e){
    e.preventDefault();
    const color = document.getElementById("colorPicker").value;
    if (e.target.nodeName === "TD") {
        e.target.style.backgroundColor = color;
    }
}

const form = document.getElementById("sizePicker");
form.addEventListener("submit",makeGrid);