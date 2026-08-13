console.log("game.js is running");



function showScreen(name){

    document.querySelectorAll("section").forEach(s => s.classList.remove("active"))

    let selector = "#" + name + "-screen";

    document.querySelector(selector).classList.add("active");

    
}

document.querySelector("#start-btn").addEventListener("click", () => {
  showScreen("cutting");
});