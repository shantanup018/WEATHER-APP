async function getWeather() {
    const city = document.getElementById('city').value;
    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
    }
}
