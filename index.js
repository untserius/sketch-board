// create the 16x16 grid

const container = document.querySelector(".container");
let gridSize = 16;

function createGrid(size) {
  container.style.setProperty("--grid-size", size);

  container.innerHTML = "";

  for (let i = 1; i <= size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
  }
  attachEventListener();
}

createGrid(gridSize);

// grid button
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const newSize = parseInt(prompt("Enter Grid Size:", gridSize));
  if (!isNaN(newSize) && newSize > 0) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert("Please enter a valid positive number.");
  }
});

// coloring part
function attachEventListener() {
  let gridItem = document.querySelectorAll(".grid-item");

  gridItem.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      gridItem.classList.add("red");
    });

    gridItem.addEventListener("mouseout", () => {
      gridItem.classList.remove("red");
    });
  });
}
