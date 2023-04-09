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
    function f1() {
      gridToggleFrame.style.flexDirection = "row-reverse";
    }

    function f2() {
      gridToggleFrame.style.flexDirection = "row";
    }

    gridToggleFrame.style.flexDirection === "row-reverse" ? f2() : f1();
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

function hover() {
  if (axis === "x") {
    if (xCoord + n <= 10) {
      for (let k = 0; k < n; k++) {
        const newBlock = document.querySelector(`.x-${xCoord + k}.y-${yCoord}`);
        newBlock.style.backgroundColor = "red";
      }
    }
  }

  if (axis === "y") {
    if (yCoord + n <= 10) {
      for (let k = 0; k < n; k++) {
        const newBlock = document.querySelector(`.x-${xCoord}.y-${yCoord + k}`);
        newBlock.style.backgroundColor = "red";
      }
    }
  }
}

function leave() {
  if (axis === "x") {
    if (xCoord + n <= 10) {
      for (let k = 0; k < n; k++) {
        const newBlock = document.querySelector(`.x-${xCoord + k}.y-${yCoord}`);
        newBlock.style.backgroundColor = "transparent";
      }
    }
  }

  if (axis === "y") {
    if (yCoord + n <= 10) {
      for (let k = 0; k < n; k++) {
        const newBlock = document.querySelector(`.x-${xCoord}.y-${yCoord + k}`);
        newBlock.style.backgroundColor = "transparent";
      }
    }
  }
}

function fnWithArgs() {
  return fn(xCoord, yCoord);
}

function placeShipOnGrid(n, axis, fn, ...args) {
  const gridBlocks = document.querySelectorAll(".placement-grid-block");

  gridBlocks.forEach((x) => {
    let yCoord = Number(x.classList[2][2]);
    let xCoord = Number(x.classList[1][2]);

    function hover() {
      if (axis === "x") {
        if (xCoord + n <= 10) {
          for (let k = 0; k < n; k++) {
            const newBlock = document.querySelector(
              `.x-${xCoord + k}.y-${yCoord}`
            );
            newBlock.style.backgroundColor = "red";
          }
        }
      }

      if (axis === "y") {
        if (yCoord + n <= 10) {
          for (let k = 0; k < n; k++) {
            const newBlock = document.querySelector(
              `.x-${xCoord}.y-${yCoord + k}`
            );
            newBlock.style.backgroundColor = "red";
          }
        }
      }
    }

    function leave() {
      if (axis === "x") {
        if (xCoord + n <= 10) {
          for (let k = 0; k < n; k++) {
            const newBlock = document.querySelector(
              `.x-${xCoord + k}.y-${yCoord}`
            );
            newBlock.style.backgroundColor = "transparent";
          }
        }
      }

      if (axis === "y") {
        if (yCoord + n <= 10) {
          for (let k = 0; k < n; k++) {
            const newBlock = document.querySelector(
              `.x-${xCoord}.y-${yCoord + k}`
            );
            newBlock.style.backgroundColor = "transparent";
          }
        }
      }
    }

    function fnWithArgs() {
      return fn(xCoord, yCoord);
    }

    x.addEventListener("mouseleave", leave);
    x.addEventListener("click", fnWithArgs);
    x.addEventListener("mouseenter", hover);
    /*
    x.addEventListener("click", () => {
      let placementGridHolder = document.querySelector(
        ".placement-grid-holder"
      );

      placementGridHolder.removeChild(
        document.querySelector(".placement-grid")
      );

      const placementGrid = document.createElement("div");
      placementGrid.classList.add("placement-grid");

      for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
          let gridBlock = document.createElement("div");
          gridBlock.classList.add("placement-grid-block", `x-${j}`, `y-${k}`);

          placementGrid.append(gridBlock);
        }
      }

      placementGridHolder.append(placementGrid);
      
    });*/
  });
}

let currAxis = "x";

function reset() {
  let placementGridHolder = document.querySelector(".placement-grid-holder");

  placementGridHolder.removeChild(document.querySelector(".placement-grid"));

  const placementGrid2 = document.createElement("div");
  placementGrid2.classList.add("placement-grid");

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      let gridBlock = document.createElement("div");
      gridBlock.classList.add("placement-grid-block", `x-${j}`, `y-${k}`);

      placementGrid2.append(gridBlock);
    }
  }

  placementGridHolder.append(placementGrid2);
}

function test1(arr) {
  const placementGrid = document.querySelector(".placement-grid");
  let index = 0;

  function fn1() {
    console.log("fn1");
    if (index < 5);
    console.log(index);
    index++;
  }

  placementGrid.addEventListener("click", fn1);

  const gridToggleFrame = document.querySelector(".grid-toggle-frame");

  gridToggleFrame.addEventListener("click", () => {
    currAxis === "x" ? (currAxis = "y") : (currAxis = "x");
    reset();
    const placementGrid = document.querySelector(".placement-grid");
    placeShipOnGrid(5, currAxis, (x, y) => console.log(x, y));
    placementGrid.addEventListener("click", fn1);
    placementGrid.addEventListener("click", () => {
      if (index === 5) {
        console.log("over");

        placementGrid.removeEventListener("click", fn1);

        reset();
      }
    });
  });

  placementGrid.addEventListener("click", () => {
    if (index === 5) {
      console.log("over");

      placementGrid.removeEventListener("click", fn1);

      reset();
    }
  });
}

export { placeShipOnGrid, makePlacementGrid, test1 };
