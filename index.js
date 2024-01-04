import {startButtonClicked} from "./button.js";

document.getElementById("startButton").addEventListener("click", () => {
    startButtonClicked();
    });

document.getElementById("chosenMinutes").addEventListener("input", (event) => {
    document.getElementById("chosenMinutesLabel").textContent = event.target.value + " minutes";
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chosenMinutes").value = 25;
    document.getElementById("chosenMinutesLabel").textContent = document.getElementById("chosenMinutes").value + " minutes";
});


