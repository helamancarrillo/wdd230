
const currentDes = document.querySelector('#current-des');
const currentTemp = document.querySelector('#current-temp');

 
const firstDate = document.querySelector('#first-date');
const firstTemp = document.querySelector('#first-temp');
const secondDate = document.querySelector('#second-date');
const secondTemp = document.querySelector('#second-temp');
const thirdDate = document.querySelector('#third-date');
const thirdTemp = document.querySelector('#third-temp');

 
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=14.1&lon=-87.18&appid=a73fd5b6d172ab974052bbfcefa92b84&units=imperial`;

async function apiFetch() {

    const response = await fetch(url);
    const data = await response.json();
    displayResults(data);
};

function displayResults(weatherData) {       
    const currentWeather = weatherData.list[0];

    currentDes.textContent = currentWeather.weather[0].description;
    currentTemp.textContent = `${currentWeather.main.temp} °F`;
     
    const forecast = weatherData.list.filter((reading) => reading.dt_txt.includes("00:00:00")).slice(1, 4);
    const options = {month: 'long', day: 'numeric'};

    firstDate.textContent = new Date(forecast[0].dt_txt).toLocaleDateString('en-US', options);
    firstTemp.textContent = `${forecast[0].main.temp} °F`;

    secondDate.textContent = new Date(forecast[1].dt_txt).toLocaleDateString('en-US', options);
    secondTemp.textContent = `${forecast[1].main.temp} °F`;

    thirdDate.textContent = new Date(forecast[2].dt_txt).toLocaleDateString('en-US', options);
    thirdTemp.textContent = `${forecast[2].main.temp} °F`;
}

apiFetch();

