function Player(name) {
  let turn = false;

  function changeTurn() {
    turn = !turn;
  }

  return { changeTurn };
}

export default Player;
