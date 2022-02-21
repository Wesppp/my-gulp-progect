let year = (new Date()).getFullYear();
let birthday = `12 March ${year}`

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    if (birthdayDate - currentDate > 0) {
        const totalSeconds = (birthdayDate - currentDate) / 1000

        const days = Math.floor(totalSeconds / 3600 / 24)
        const hours = Math.floor(totalSeconds / 3600) % 24
        const minutes = Math.floor(totalSeconds / 60) % 60
        const seconds = Math.floor(totalSeconds) % 60
    
        daysEl.innerHTML = days
        hoursEl.innerHTML = hours
        minutesEl.innerHTML = minutes
        secondsEl.innerHTML = seconds
    } else {
        birthday = `10 Jan ${year++}`
    }
}

countdown()

setInterval(countdown , 1000);

