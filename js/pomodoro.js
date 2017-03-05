var interval = document.getElementById("interval-val");
var timer = document.getElementById('timer-val');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var pomodoroBtn = document.querySelector(".pomodoro");
var isClicked = true, flag = "interval";
var id = "";
var counter = 0, breaks = 0;

intervalUp = document.querySelector(".interval-up");
intervalDown = document.querySelector(".interval-down");

timerUp = document.querySelector(".timer-up");
timerDown = document.querySelector(".timer-down");

console.log(intervalUp);

/**
 * Logic Goes Here
 */

//====================================

/**
 * Counters
 */

function countUp(el) {
    if (el.innerHTML >= 25) return;
    let num = Number(el.innerHTML) + 1
    el.innerHTML = num < 10 ? "0" + num : num;
    // el.innerHTML = Number(el.innerHTML) + 1;
}

function countDown(el) {
    if (el.innerHTML <= 1) return;
    let num = Number(el.innerHTML) - 1;
    el.innerHTML = num < 10 ? "0" + num : num;
}

function startTime(ty) {
    let minVal = Number(min.innerHTML);
    let secVal = Number(sec.innerHTML);

    if (minVal == 0 && secVal == 0) {
        // clearInterval(id);
        sec.innerHTML = 59;
        min.innerHTML = (ty == "timer") ? Number(interval.innerHTML)-1: Number(timer.innerHTML)-1;
        flag = ty;
        return;
    } else if (secVal == 0) {
        secVal = 60;
        min.innerHTML = minVal - 1 == 0 ? "00" : minVal - 1;
    }
    sec.innerHTML = secVal - 1 == 0 ? "00" : secVal - 1;
    return;
}

function startTimer() {
    startTime("timer");
}

function startInterval() {
    startTime("interval");
}

function stopTime() {
    clearInterval(id);
}

function startPomo() {
    if(flag == "interval") {
        startTimer();
    } else if(flag == "timer") {
       startInterval();
    }
    console.log(flag, counter, breaks);
}


/**
 * Interval Adjust
 */

intervalUp.addEventListener('click', function () {
    countUp(interval);
});

intervalDown.addEventListener('click', function () {
    countDown(interval);
});


/**
 * Timer Adjust
 */

timerUp.addEventListener('click', function () {
    countUp(timer);
    min.innerHTML = timer.innerHTML;
    sec.innerHTML = "00";
});

timerDown.addEventListener('click', function () {
    countDown(timer);
    min.innerHTML = timer.innerHTML;
    sec.innerHTML = "00";
});

pomodoroBtn.addEventListener('click', function () {
    if (isClicked) {
        id = setInterval(startPomo, 1000);
        isClicked = false;
    } else {
        stopTime();
        isClicked = true;
    }
});