const apiKey = " "

const getWeatherButton = document.getElementById('get-weather-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

// Event listener for Get Weather button
getWeatherButton.addEventListener('click', function () {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    getWeather(city);
});

// Function to fetch weather data from OpenWeather API
async function getWeather(city) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=261e42ec472d5848d50075e53fea61c5&units=metric";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found. Please try again.');
            return;
        }

        // Display weather data
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Condition: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        // Clear input
        cityInput.value = '';
    } catch (error) {
        alert('An error occurred. Please try again later.');
        console.error(error);
    }
}

