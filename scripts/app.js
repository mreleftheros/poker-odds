const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");

// function to make welcome screen disappear
const closeWelcome = () => {
  welcome.classList.add("move");

  welcome.addEventListener("transitionend", e => {
    e.target.style.display = "none";
    init();
  });
};

// function to initialiaze game UI
const init = () => {
  
};

// events
startBtn.addEventListener("click", closeWelcome);