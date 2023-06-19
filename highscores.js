document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById("headers");
  const scores = document.getElementById("scores");

  function createGridWithItems(grid, rows, cols, arr) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < rows * cols; c++) {
      let cell = document.createElement("div");
      cell.innerText = arr[c];
      grid.appendChild(cell).className = "grid-item";
    }
  }

  function createGridHeaders(grid, rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < rows * cols; c++) {
      let cell = document.createElement("div");
      cell.innerText = c === 0 ? "Name" : "Scores";
      grid.appendChild(cell).className = "grid-item";
    }
  }

  var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  createGridHeaders(header, 1, 2);
  createGridWithItems(scores, 10, 2, arr1);
});