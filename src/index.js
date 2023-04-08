import Ai from "./ai.js";
import Gameboard from "./gameboard.js";
import Player from "./player.js";
import Ship from "./ship.js";
import "./menu.js";
import "./style.css";

let player;

let computer = Player("Computer");

let playerBoard = Gameboard();

let computerBoard = Gameboard();

const startForm = document.querySelector(".player-info-form");

startForm.addEventListener("submit", () => {
  event.preventDefault();

  startForm.style.display = "none";

  let playerNameInfo = document.querySelector("#player-name");

  playerNameInfo = playerNameInfo.value;

  player = Player(playerNameInfo);
});
