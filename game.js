console.log("game.js is running");

let state = {

currentScreen: "title",
score: 0,
coins: 0

};

let titleScreen = {

  enter: function() {
    console.log("entering title");
  },
  
  exit: function() {
    console.log("leaving title");
  }
  
  document.querySelector("#start-btn").addEventListener("click", () => {
  showScreen("cutting");
  });

};

let cuttingScreen = {

  enter: function() {
    console.log("entering cutting");
  },
  
  exit: function() {
    console.log("leaving cutting");
  }

};

let resultsScreen = {

  enter: function() {
    console.log("entering results");
  },
  
  exit: function() {
    console.log("leaving results");
  }

};

let screens = {
  title: titleScreen,
  cutting: cuttingScreen,
  results: resultsScreen
};


function showScreen(name){

    document.querySelectorAll("section").forEach(s => s.classList.remove("active"))

    let selector = "#" + name + "-screen";

    document.querySelector(selector).classList.add("active");

    state.currentScreen = name;
};




