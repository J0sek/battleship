function makePlacementGrid() {
  const gridHolder = document.createElement("div");
  gridHolder.classList.add("placement-grid-holder");

  const gridToggleHolder = document.createElement("div");
  gridToggleHolder.classList.add("grid-toggle-holder");

  const xGridToggle = document.createElement("div");
  xGridToggle.classList.add("x-grid-toggle");
  xGridToggle.textContent = "x-axis";

  const yGridToggle = document.createElement("div");
  yGridToggle.classList.add("y-grid-toggle");
  yGridToggle.textContent = "y-axis";

  const gridToggleFrame = document.createElement("div");
  gridToggleFrame.classList.add("grid-toggle-frame");

  gridToggleFrame.addEventListener("click", () => {
    gridToggleFrame.style.flexDirection === "row"
      ? (gridToggleFrame.style.flexDirection = "row-reverse")
      : (gridToggleFrame.style.flexDirection = "row");
  });

  const gridToggleSlider = document.createElement("div");
  gridToggleSlider.classList.add("grid-toggle-slider");

  gridToggleHolder.append(xGridToggle, gridToggleFrame, yGridToggle);

  gridToggleFrame.append(gridToggleSlider);

  const placementGrid = document.createElement("div");
  placementGrid.classList.add("placement-grid");

  const body = document.querySelector("body");
  gridHolder.append(gridToggleHolder, placementGrid);
  body.append(gridHolder);

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      let gridBlock = document.createElement("div");
      gridBlock.classList.add("placement-grid-block", `x-${j}`, `y-${k}`);

      placementGrid.append(gridBlock);
    }
  }
}

function placeShipOnGrid(fn, n, axis) {
  const gridBlocks = document.querySelectorAll(".placement-grid-block");

  if (axis === "x") {
    gridBlocks.forEach((x) => {
      x.addEventListener("mouseenter", () => {
        let xCoord = Number(x.classList[1][2]);
        if (xCoord + n <= 10) {
          let yCoord = Number(x.classList[2][2]);
          for (let k = 0; k < n; k++) {
            const newBlock = document.querySelector(
              `.x-${xCoord + k}.y-${yCoord}`
            );
            newBlock.style.backgroundColor = "red";
          }
        }
      });

      x.addEventListener("click", () => {
        fn;
      });

      x.addEventListener("mouseleave", () => {
        let xCoord = Number(x.classList[1][2]);
        if (xCoord + n <= 10) {
          let yCoord = Number(x.classList[2][2]);
          for (let k = 0; k < n; k++) {
            const newBlock = document.querySelector(
              `.x-${xCoord + k}.y-${yCoord}`
            );
            newBlock.style.backgroundColor = "transparent";
          }
        }
      });
    });
  }

  if (axis === "y") {
    gridBlocks.forEach((x) => {
      x.addEventListener("mouseenter", () => {
        let yCoord = Number(x.classList[2][2]);
        if (yCoord + n <= 10) {
          let xCoord = Number(x.classList[1][2]);
          for (let k = 0; k < n; k++) {
            const newBlock = document.querySelector(
              `.x-${xCoord}.y-${yCoord + k}`
            );
            newBlock.style.backgroundColor = "red";
          }
        }
      });

      x.addEventListener("click", () => {
        fn;
      });

      x.addEventListener("mouseleave", () => {
        let yCoord = Number(x.classList[2][2]);
        if (yCoord + n <= 10) {
          let xCoord = Number(x.classList[1][2]);
          for (let k = 0; k < n; k++) {
            const newBlock = document.querySelector(
              `.x-${xCoord}.y-${yCoord + k}`
            );
            newBlock.style.backgroundColor = "transparent";
          }
        }
      });
    });

    gridBlocks.forEach((x) => {});
  }
}

export { placeShipOnGrid, makePlacementGrid };
