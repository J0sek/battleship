function Ship(length) {
  let hitCount = 0;
  let sunk = false;

  function hit() {
    hitCount++;
  }

  function isSunk() {
    if (hitCount === length) sunk = true;
    return sunk;
  }

  return { hit, isSunk };
}
