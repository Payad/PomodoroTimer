//Pomodoro Timer function

// const digits = document.querySelector('.digits');
const title = document.querySelector('.title');
const breakBtn = document.querySelector('.break');
breakBtn.style.display = 'none';
const stopBtn = document.querySelector('.stop');
stopBtn.style.display = 'none'

function Timer(duration, display) {
    var time = duration, minute, second;
    let timer = setInterval(function () {
        minute = parseInt(time / 60, 10);
        second = parseInt(time % 60, 10);

        minute = minute < 10 ? "0" + minute : minute; 
        second = second < 10 ? "0" + second : second;

        if (--time < 0) {
            time = duration;
        }

        // display = document.querySelector('.digits');
        display.innerText = minute + ":" + second;

        // const stopBtn = document.querySelector('.stop');
        stopBtn.addEventListener('click', () => {
        title.innerHTML = 'Pause';
        breakBtn.style.display = 'none';
        startBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
        clearInterval(timer)
});

        // const breakBtn = document.querySelector('.break');
        // breakBtn.style.display = 'none';
        breakBtn.addEventListener('click', () => {
            title.innerHTML = 'Break'
            clearInterval(timer);

            minute = parseInt(time / 60, 10);
            second = parseInt(time % 60, 10)

            if (--time < 0) {
                time = duration
            }
            display.innerText = minute + ':' + second;
            const five = 60 * 5;
            display = document.querySelector('.digits');
            Timer(five, display)
        });
        
    }, 1000)
}

const startBtn = document.querySelector('.start');
// startBtn.style.backgroundColor = 'yellow';
startBtn.addEventListener('click', () => {
    title.innerHTML = 'Work';
    const twentyFive = 60 * 25;
    display = document.querySelector('.digits');
    breakBtn.style.display = 'inline-block';
    // breakBtn.style.marginLeft = 'auto';
    // breakBtn.style.marginRight = 'auto';
    stopBtn.style.display = 'inline-block';
    // stopBtn.style.marginLeft = 'auto';
    // stopBtn.style.marginRight = 'auto';
    startBtn.style.display = 'none';
    Timer(twentyFive, display);
})

// const imgBtn = document.getElementsByClassName('.start')[0];
// if (startBtn) {
//     startBtn.style.display = 'none'
// }
// const stopBtn = document.querySelector('.stop');

// stopBtn.addEventListener('click', () => {
//     clearInterval(timer)
// });

// window.onload(function () {
//     const five = 60 * 5;
//     display = document.querySelector('.digits');
//     Timer(five, duration);
// })