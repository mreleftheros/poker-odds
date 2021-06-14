const welcome = document.getElementById("welcome");
const poker = document.getElementById("poker");
const startBtn = document.getElementById("startBtn");
const endBtn = document.getElementById("endBtn");
const players = [];

// create Player class
class Player {
  constructor() {
    this.call = null;
    this.callScore = 0;
    this.raise = null;
    this.raiseScore = 0;
  }
}

// create players and push them to players array
for(let i = 0; i < 9; i++) {
  const player = new Player();

  players.push(player);
}

// function to make welcome screen disappear
const closeWelcome = () => {
  welcome.classList.add("move");

  welcome.addEventListener("transitionend", e => {
    e.target.style.display = "none";
  });
};

// function to check if all player values are not null and return true or false
const checkAllValues = () => {
  for(let i = 0, n = players.length; i < n; i++) {
    if(players[i].call === null || players[i] === null) {
      return false;
    }
  }
  return true;
};

// function to end current round
const endRound = () => {
  let allChecked = checkAllValues(); // returns true or false
};

// event listeners
// startBtn.addEventListener("click", closeWelcome);
endBtn.addEventListener("click", endRound);