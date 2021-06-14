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
    this.rounds = 0;
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

// function to update player at round end
const updatePlayers = () => {
  players.forEach(player => {
    player.updateCallScore();
    player.updateRaiseScore();
    player.rounds++;

    // reset to null
    player.call = null;
    player.raise = null;
  })
};

// function to reset inputs
const resetInputs = () => {
  const inputs = document.getElementsByClassName("input");

  for(let input of inputs) {
    input.classList.remove("checked");
  }
};

// function to end current round
const endRound = () => {
  let allChecked = checkAllValues(); // returns true or false

  if(allChecked) {
    updatePlayers();
    resetInputs();
    updateEndMessage(true);
  }
  else {
    updateEndMessage(false);
  }
};

// function to check user click
const handleClick = e => {
  let player = e.target.parentElement.parentElement;
  let playerIndex = (+player.classList[1].substr(-1)) - 1;
  
  if(e.target.classList.contains("call-check")) {
    //remove checked class from oposite input
    let oppositeInput = e.target.parentElement.children[1];
    if(oppositeInput.classList.contains("checked")) {
      oppositeInput.classList.remove("checked");
    }

    e.target.classList.add("checked");
    players[playerIndex].call = true;
  }
  else if(e.target.classList.contains("call-ban")) {
    //remove checked class from oposite input
    let oppositeInput = e.target.parentElement.children[0];
    if(oppositeInput.classList.contains("checked")) {
      oppositeInput.classList.remove("checked");
    }
    
    e.target.classList.add("checked");
    players[playerIndex].call = false;
  }
  else if(e.target.classList.contains("raise-check")) {
    //remove checked class from oposite input
    let oppositeInput = e.target.parentElement.children[1];
    if(oppositeInput.classList.contains("checked")) {
      oppositeInput.classList.remove("checked");
    }
    
    e.target.classList.add("checked");
    players[playerIndex].raise = true;
  }
  else if(e.target.classList.contains("raise-ban")) {
    //remove checked class from oposite input
    let oppositeInput = e.target.parentElement.children[0];
    if(oppositeInput.classList.contains("checked")) {
      oppositeInput.classList.remove("checked");
    }
    
    e.target.classList.add("checked");
    players[playerIndex].raise = false;
  }

  console.log(players[playerIndex])
};

// function to check click
const checkClick = e => {
  if(e.target.classList.contains("input")) 
    handleClick(e);
}

// event listeners
// startBtn.addEventListener("click", closeWelcome);
endBtn.addEventListener("click", endRound);
poker.addEventListener("click", checkClick);