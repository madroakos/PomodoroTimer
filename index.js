import {startButtonClicked, setSound} from "./button.js";

document.getElementById("startButton").addEventListener("click", () => {
    startButtonClicked();
    setSound(new Audio('yippee.mp3'));
    });

document.getElementById("chosenMinutes").addEventListener("input", (event) => {
    document.getElementById("chosenMinutesLabel").textContent = event.target.value + " minutes";
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chosenMinutes").value = 25;
    document.getElementById("chosenMinutesLabel").textContent = document.getElementById("chosenMinutes").value + " minutes";
});


