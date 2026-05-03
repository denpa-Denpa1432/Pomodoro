let timeLeft = 1500; // 25분
let timerId = null;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

startBtn.addEventListener('click', () => {
    if (timerId) return;
    timerId = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(timerId);
            alert("집중 시간이 끝났습니다!");
        }
    }, 1000);
});
