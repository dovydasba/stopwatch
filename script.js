let startTime = null;
let elapsedTime = 0;
let intervalId = null;

document.getElementById('start').addEventListener('click', function() {
    if (!intervalId) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            let totalSeconds = Math.floor(elapsedTime / 1000);
            let totalMinutes = Math.floor(totalSeconds / 60);
            let displayMilliseconds = Math.floor((elapsedTime % 1000) / 10);
            let displaySeconds = totalSeconds % 60;
            let displayMinutes = totalMinutes % 60;
            document.getElementById('milliseconds').textContent = pad(displayMilliseconds);
            document.getElementById('seconds').textContent = pad(displaySeconds);
            document.getElementById('minutes').textContent = pad(displayMinutes);
        }, 10);
    }
});

document.getElementById('stop').addEventListener('click', function() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = 0;
    document.getElementById('milliseconds').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('minutes').textContent = '00';
});

document.getElementById('record').addEventListener('click', function() {
    let recordedTime = document.getElementById('minutes').textContent + ":" +
                       document.getElementById('seconds').textContent + ":" +
                       document.getElementById('milliseconds').textContent;
    let p = document.createElement('p');
    p.textContent = recordedTime;
    document.getElementById('recordedTimes').appendChild(p);
});

function pad(number) {
    return number < 10 ? '0' + number : number;
}