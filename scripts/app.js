const welcome = document.getElementById("welcome");
const poker = document.getElementById("poker");
const startBtn = document.getElementById("startBtn");
const endBtn = document.getElementById("endBtn");

// create Player class
class Person {
  constructor() {
    this.call = null;
    this.raise = null;
  }
}

// function to make welcome screen disappear
const closeWelcome = () => {
  welcome.classList.add("move");

  welcome.addEventListener("transitionend", e => {
    e.target.style.display = "none";
  });
};

// function to end current round
const endRound = () => {

};

// event listeners
// startBtn.addEventListener("click", closeWelcome);
endBtn.addEventListener("click", endRound);