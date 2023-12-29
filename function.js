let userGridSize = 16;
createGridRow(userGridSize);

function getSize() {
    let userGridSize = document.querySelector('.js-gridSize').value;
    if ((userGridSize < 2) || (userGridSize > 100)) {
        alert("Error: Choose a grid size between 2-100 please!");
    } else {
        createGridRow(userGridSize);
    }
}

function createGridRow(userGridSize) {
    let rowHTML = '';
    let boxHTML = '';
    let boxSize = 900 / userGridSize;
    for (let i = 0; i < userGridSize; i++) {
        for (let j = 0; j < userGridSize; j++) {
            const buildIndvBox = `<div style="
            width: ${boxSize}px;
            height: ${boxSize}px;" class="basicGrid"></div>`;
            boxHTML += buildIndvBox;
        }
        const buildIndvGrid = `<div class='row'>${boxHTML}</div>`;
        rowHTML += buildIndvGrid;
        boxHTML = '';
    }
    document.querySelector('.js-basicGridRow').innerHTML = rowHTML;
}

