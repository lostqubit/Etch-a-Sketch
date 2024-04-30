const createGrid = (dimension) => {
    for(let row=0;row<dimension;row++){
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row");
        grid.append(rowDiv);
        for(let col=0;col<dimension;col++){
            const cell = document.createElement("div");
            cell.setAttribute("class","cell");
            rowDiv.append(cell);
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


let container,grid,sizeBtn;

resetGrid();
createGrid(16); 
