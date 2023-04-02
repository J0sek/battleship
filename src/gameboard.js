import Ship from "./ship.js";

function Gameboard() {
  const boardArray = [[], [], [], [], [], [], [], [], [], []];

  let spaces = 100;

  let shipCount = 0;

  function placeShip(length, x, y, axis) {
    let newShip = Ship(length);

    //Place ship within board
    if (x < 0 || x > 9) throw Error("Ship is out of bouds on x-axis");

    if (y < 0 || y > 9) throw Error("Ship is out of bouds on y-axis");

    //Place ship starting with x coord
    if (axis.toLowerCase() === "x") {
      if (x + length - 1 > 9) throw Error("Ship is out of bounds on x-axis");

      spaces -= length;

      shipCount++;

      for (let k = x; k++; k < x + length) {
        boardArray[k][y] = newShip;
      }
    }

    //Place ship starting with y coord
    if (axis.toLowerCase() === "y") {
      if (y + length - 1 > 9) throw Error("Ship is out of bounds on x-axis");

      spaces -= length;

      shipCount++;

      for (let k = y; k++; k < y + length) {
        boardArray[x][k] = newShip;
      }
    }
  }

  function receiveAttack(x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9)
      throw Error("Attack is out of bounds");

    if (boardArray[x][y] === undefined) {
      boardArray[x][y] === "x";
      spaces--;
      return;
    }

    if (boardArray[x][y] === "x" || boardArray[x][y] === "o") {
      throw Error("This space has already been attacked");
    }

    boardArray[x][y].hit();
    boardArray[x][y] = "o";
    if (boardArray.isSunk()) shipCount--;
  }

  function isAllSunk() {
    return shipCount === 0;
  }

  function isAllAttacked() {
    return spaces === 0;
  }

  return { placeShip, receiveAttack };
}
