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

};


function showScreen(name){

    document.querySelectorAll("section").forEach(s => s.classList.remove("active"))

    let selector = "#" + name + "-screen";

    document.querySelector(selector).classList.add("active");

    state.currentScreen = name;
};

document.querySelector("#start-btn").addEventListener("click", () => {
  showScreen("cutting");
});