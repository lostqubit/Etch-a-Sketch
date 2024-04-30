const createGrid = (dimension) => {
    for(let row=0;row<dimension;row++){
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row");
        container.append(rowDiv);
        for(let col=0;col<dimension;col++){
            const cell = document.createElement("div");
            cell.setAttribute("class","cell");
            rowDiv.append(cell);
        }    
    }

}

const container = document.querySelector(".grid");

createGrid(16);
