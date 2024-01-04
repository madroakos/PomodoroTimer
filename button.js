import {getTimer, setTimer, updateTimer} from "./counter.js";

let startButton = document.getElementById("startButton");
let numberOfPushes = 0;
let myTimer = 0;
let myTimerInterval;
let sound;
let numberChooserDiv = document.getElementById("numberChooserDiv");
let inputTagDiv = document.getElementById("inputTagDiv");
let containerDiv = document.getElementById("container");
let resetButton = document.createElement("button");

function startButtonClicked() {
    if (numberOfPushes % 2 === 0) {
        if (numberOfPushes === 0) {
            setTimer(document.getElementById("chosenMinutes").value);
            numberChooserDiv.remove();
            appendResetButton();

            let isCounterAvailable = document.getElementById("counter");
            let isFinalSentenceAvailable = document.getElementById("finalSentence");
            if (isCounterAvailable === null) {
                appendLabel("counter", "0");
            }
            if (isFinalSentenceAvailable != null) {
                isFinalSentenceAvailable.remove();
            }
        }
        startTimer(getTimer());
        changeToRed();
        numberOfPushes++;
    } else {
        stopTimer();
        changeToBlue();
        numberOfPushes++;
    }
}

function changeToRed() {
    startButton.innerText = "Stop";
    startButton.classList.replace("btn-outline-primary", "btn-outline-danger");
}

function changeToBlue() {
    startButton.classList.replace("btn-outline-danger", "btn-outline-primary");
    startButton.innerText = "Resume";
}

function changeToStart() {
    startButton.classList.replace("btn-outline-danger", "btn-outline-primary");
    startButton.innerText = "Start again";
    numberOfPushes = 0;
    if (document.getElementById("counter") != null) {
        document.getElementById("counter").remove();
    }
    if (document.getElementById("resetButton") != null) {
        document.getElementById("resetButton").remove();
    }
    containerDiv.append(numberChooserDiv);

}

function startTimer(timer) {
    updateTimer();
    myTimer = timer;
    myTimerInterval = setInterval(() => {
        myTimer--;
        setTimer(myTimer);
        updateTimer();
        if (myTimer <= 0) {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(myTimerInterval);
    if (getTimer() === 0) {

        numberChooserDiv.append(inputTagDiv);
        sound.play();
        changeToStart();
    }
}

function resetEverything() {
    clearInterval(myTimerInterval);
    changeToStart();
    resetButton.remove();
}

function appendLabel(id, text) {
    let newLabel = document.createElement("span");

    newLabel.setAttribute("class", "white");
    newLabel.setAttribute("id", id);
    newLabel.textContent = text; // Set the initial text content

    let containerDiv = document.getElementById("container");

    containerDiv.append(newLabel);
}

function appendResetButton() {
    resetButton.setAttribute("id", "resetButton");
    resetButton.textContent = "↺";
    resetButton.classList.add("btn", "btn-outline-dark", "rounded-pill");
    document.getElementById("buttons").append(resetButton);

    document.getElementById("resetButton").addEventListener("click", () => {
        resetEverything();
    });
}

function setSound(newSound) {
    sound = newSound;
}

export {startButtonClicked, setSound};