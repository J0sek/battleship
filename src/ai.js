import Gameboard from "./gameboard";

function Ai() {
  function randomAttackCoord() {
    if (attackLog.length === 0) {
      let x = Math.floor(Math.random() * 10);
      while (x > 9) {
        x = Math.floor(Math.random() * 10);
      }
      let y = Math.floor(Math.random() * 10);
      while (y > 9) {
        y = Math.floor(Math.random() * 10);
      }
      return [x, y];
    }
  }

  function randomAdjacent(x, y) {
    dice = Math.random();
    if (dice > 0 && dice <= 0.25) return [x + 1, y];
    if (dice > 0.25 && dice <= 0.5) return [x - 1, y];
    if (dice > 0.5 && dice <= 0.75) return [x, y + 1];
    if (dice > 0.75 && dice <= 1.0) return [x, y - 1];
  }

  const hitShipTracker = [];

  function logHit(x, y) {
    //to be used on initial hit

    if (hitShipTracker.length === 0) {
      hitShipTracker[0] = [x, y];
      return;
    }

    //after initinal hits
    if (hitShipTracker[0][0] > x || hitShipTracker[0][1] > y)
      hitShipTracker.shift([x, y]);
    else hitShipTracker.push([x, y]);
  }

  function directionalHit() {
    let coin = Math.random();
    if (hitShipTracker[hitShipTracker.length][0] === hitShipTracker[0][0]) {
      return coin <= 0.5
        ? [hitShipTracker[0][0], hitShipTracker.length[0][1] - 1]
        : [
            hitShipTracker[hitShipTracker.length][0],
            hitShipTracker[hitShipTracker.length][1] + 1,
          ];
    }

    return coin <= 0.5
      ? [hitShipTracker[0][0] - 1, hitShipTracker.length[0][1]]
      : [
          hitShipTracker[hitShipTracker.length][0] + 1,
          hitShipTracker[hitShipTracker.length][1],
        ];
  }

  function checkExtra(readBoard, givenShipType) {
    let extra = [];
    for (let k = 0; k < hitShipTracker.length; k++) {
      if (
        readBoard(hitShipTracker[k][0], hitShipTracker[k][1]) !== givenShipType
      )
        extra[extra.length] = [hitShipTracker[k][0], hitShipTracker[k][1]];
    }

    hitShipTracker = extra;
  }

  function attack() {
    if (hitShipTracker.length === 0) return randomAttackCoord();

    if (hitShipTracker.length === 1)
      return randomAdjacent(hitShipTracker[0][0], hitShipTracker[0][1]);

    return directionalHit();
  }
  return { logHit, attack, checkExtra };
}

export default Ai;
