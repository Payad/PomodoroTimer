//Pomodoro Timer function

// const digits = document.querySelector('.digits');

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

        const stopBtn = document.querySelector('.stop');
        stopBtn.addEventListener('click', () => {
        clearInterval(timer)
});

        const breakBtn = document.querySelector('.break');
        breakBtn.addEventListener('click', () => {
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

startBtn.addEventListener('click', () => {
    const twentyFive = 60 * 25;
    display = document.querySelector('.digits');
    Timer(twentyFive, display);
})

// const stopBtn = document.querySelector('.stop');

// stopBtn.addEventListener('click', () => {
//     clearInterval(timer)
// });

// window.onload(function () {
//     const five = 60 * 5;
//     display = document.querySelector('.digits');
//     Timer(five, duration);
// })