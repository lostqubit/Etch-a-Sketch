const createGrid = (dimension) => {
    let counter = 1;
    for(let row=0;row<dimension;row++){
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row");
        grid.append(rowDiv);
        for(let col=0;col<dimension;col++){
            const cell = document.createElement("div");
            cell.setAttribute("class","cell");
            cell.setAttribute("id",`cell-${counter}`);
            rowDiv.append(cell);

            cell.addEventListener("mouseover",colorCell);
            counter++;
        }    
    }
}

const resetGrid = () => {
    container = document.querySelector(".container");
    grid = document.querySelector(".grid");
    sizeBtn = document.querySelector("#size-btn");

    sizeBtn.addEventListener("click", changeGridSize);
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
    
        resetGrid();
        createGrid(size);
    }
}

const generateRandomColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

const colorCell = (event) => {
    const color = generateRandomColor();
    document.querySelector(`#${event.target.id}`).style.backgroundColor = color;
}


let container,grid,sizeBtn;

resetGrid();
createGrid(16); 
