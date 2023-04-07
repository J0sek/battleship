const startForm = document.querySelector(".player-info-form");

startForm.addEventListener("submit", () => {
  event.preventDefault();

  startForm.style.display = "none";
});
