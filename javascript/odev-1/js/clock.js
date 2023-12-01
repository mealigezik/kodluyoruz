// let userName = prompt("Your Name?");

// document.getElementById("myName").textContent = userName;

function myTime() {
    let actualTime = document.getElementById("myClock")
    let fullTime = new Date();
    let hours = fullTime.getHours();
    let minutes = fullTime.getMinutes();
    let seconds = fullTime.getSeconds();
    let milliseconds = fullTime.getMilliseconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    let screenTime = hours + ":" + minutes + ":" + seconds + ":" + Math.floor(milliseconds / 100);

    actualTime.innerHTML = screenTime;
}
setInterval(myTime, 100)

myTime();
