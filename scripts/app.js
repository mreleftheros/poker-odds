const welcome = document.getElementById("welcome");
const poker = document.getElementById("poker");
const startBtn = document.getElementById("startBtn");
const endBtn = document.getElementById("endBtn");
const endMessage = document.getElementById("endMessage");
const players = [];

// create Player class
class Player {
  constructor() {
    this.call = null;
    this.raise = null;
    this.callScore = 0;
    this.raiseScore = 0;
    this.round = 0;
  }

  updateCallScore() {
    if(this.call) return this.callScore++;
  }

  updateRaiseScore() {
    if(this.raise) return this.raiseScore++;
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

// function to update endMessage UI
const updateEndMessage = value => {
  if(value) {
    endMessage.textContent = "Round Ended Successfully!";
    endMessage.classList.add("success");

    setTimeout(() => {
      endMessage.classList.remove("success");
    }, 2000)
  }
  else {
    endMessage.textContent = "Sorry! Round cannot end!";
    endMessage.classList.add("error");

    setTimeout(() => {
      endMessage.classList.remove("error");
    }, 2000)
  }
};

// function to update all players scores
const updateScores = () => {

};

// function to end current round
const endRound = () => {
  let allChecked = checkAllValues(); // returns true or false

  if(allChecked) {
    updatePlayers();
    updateEndMessage(true);
  }
  else {
    updateEndMessage(false);
  }
};

// function to check user click
const updateClick = e => {
  let player = e.target.parentElement.parentElement;
  let playerIndex = (+player.classList[1].substr(-1)) - 2;
  
  if(e.target.classList.contains("call-check")) {
    e.target.classList.toggle("checked");
    players[playerIndex].call = true;
  }
  else if(e.target.classList.contains("call-ban")) {
    e.target.classList.toggle("checked");
    players[playerIndex].call = false;
  }
  else if(e.target.classList.contains("raise-check")) {
    e.target.classList.toggle("checked");
    players[playerIndex].raise = true;
  }
  else if(e.target.classList.contains("raise-ban")) {
    e.target.classList.toggle("checked");
    players[playerIndex].raise = false;
  }
};

// event listeners
// startBtn.addEventListener("click", closeWelcome);
endBtn.addEventListener("click", endRound);
poker.addEventListener("click", updateClick);