const resetVariables = () => {
    container = document.querySelector(".container");
    grid = document.querySelector(".grid");
    sizeBtn = document.querySelector("#size-btn");
    resetBtn = document.querySelector("#reset-btn");
    darkeningBtn = document.querySelector("#darken-btn");
    darkeningBtn.textContent = "Enable Darkening";

    sizeBtn.addEventListener("click", changeGridSize);
    resetBtn.addEventListener("click",resetGrid);
    darkeningBtn.addEventListener("click",toggleDarkening);
}

const createGrid = (dimension) => {
    gridSize = dimension;
    let counter = 1;
    for(let row=0;row<dimension;row++){
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row");
        grid.append(rowDiv);
        for(let col=0;col<dimension;col++){
            const cellContainer = document.createElement("div");
            cellContainer.setAttribute("class","cell-container");
            const cell = document.createElement("div");
            cell.setAttribute("class","cell");
            cell.setAttribute("id",`cell-${counter}`);
            rowDiv.append(cellContainer);
            cellContainer.append(cell);

            cell.addEventListener("mouseover",colorCell);
            counter++;
        }    
    }
}

const changeGridSize = () => {
    let size = prompt('Enter grid size:\n(Max value:100)');
    if(size!=="" && size!==null){
        size = parseInt(size);
        if(size){
            if(size>100){
                while(size>100){
                    size = prompt("Grid size cannot be more than 100. Please enter a valid value:");
                    if(size!=="" && size!==null){
                        size = parseInt(size);
                        while(!size){
                            size = prompt('Please enter a valid value (1-100):');
                            if(size==="" || size===null) {
                                return;
                            }
                            size = parseInt(size);
                        }
                    }
                    else{
                        return;
                    }
                }
            }
        }
        else{
            while(!size){
                size = prompt('Please enter a valid value (1-100):');
                if(size==="" || size===null) {
                    return;
                }
                size = parseInt(size);
            }
        }
    
        grid.remove();
        grid = document.createElement("div");
        grid.setAttribute("class","grid");
        container.append(grid);
    
        resetVariables();
        createGrid(size);
    }
}

const resetGrid = () => {
    grid.remove();
    grid = document.createElement("div");
    grid.setAttribute("class","grid");
    container.append(grid);

    resetVariables();
    createGrid(gridSize);
}

const generateRandomColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

const colorCell = (event) => {
    const color = generateRandomColor();
    const cell = document.querySelector(`#${event.target.id}`);
    if(cell.style.opacity===""){
        cell.style.opacity = "1";
    }
    else{
        if(darkeningFlag){
            const opacity = parseFloat(cell.style.opacity)-0.1;
            if(parseFloat(cell.style.opacity)>0) cell.style.opacity = opacity.toString();
            console.log("duh");
        }
    }
    cell.style.backgroundColor = color;
}

const toggleDarkening = () => {
    if(darkeningBtn.textContent === "Enable Darkening") {
        darkeningBtn.textContent="Disable Darkening";
        darkeningFlag = true;
    }
    else {
        darkeningBtn.textContent = "Enable Darkening";
        darkeningFlag = false;
    }
}


let container,grid,gridSize,sizeBtn,resetBtn,darkeningBtn;
let darkeningFlag = false;

resetVariables();
createGrid(16); 
