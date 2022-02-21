const weatherForm = document.querySelector('.wether-form');
const search = document.getElementById('search');
const weatherInfo = document.querySelector('.wether-info');

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

async function getWeatherByLocation(city) {
    const response = await fetch(url(city));
    const responseData = await response.json();

    addWeather(responseData);
}


function addWeather(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div')
    weather.classList.add('weather')

    weather.innerHTML = `
    <h2>${temp}°C</h2>
    <p>
    wind speed - ${data.wind.speed}m/s <br>
    humidity - ${data.main.humidity}% <br>
    pressure - ${data.main.pressure * 0.75}mmHg
    </p>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
    `

    weatherInfo.innerHTML = "";
    weatherInfo.style.opacity = '1';
    animateCSS(weatherInfo, 'flipInY')
    weatherInfo.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    } else {
        warningMessage('weather');
    }
})