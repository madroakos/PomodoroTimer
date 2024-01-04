let timer = 2;

function updateTimer() {
    document.getElementById("counter").innerHTML = timerToString(timer);
}

function timerToString(timer) {
    if(timer % 60 < 10) {
        return (timer / 60).toFixed(0) + ":0" + (timer % 60);
    } else {
        return Math.floor((timer / 60)).toFixed(0) + ":" + (timer % 60);
    }
}

function getTimer() {
    return timer;
}

function setTimer(newTimer) {
    timer = newTimer;
}

export {updateTimer, getTimer, setTimer};