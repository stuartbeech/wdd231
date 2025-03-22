const apiKey = "54362e31f8a9437dfcce17bfafd155ad";

const weatherDiv = document.getElementById("WeatherInfo");
const forecastDiv = document.getElementById("ForecastInfo");

function fetchWeather() {
  const city = "Johannesburg";
  const country = "ZA";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      const temp = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const capitalizedDescription =
        description.charAt(0).toUpperCase() + description.slice(1);
      const icon = data.weather[0].icon;
      const humidity = data.main.humidity;

      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      weatherDiv.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        <span class="weather-info"><p><strong>${temp}</strong> °C</p>
        <p>${capitalizedDescription}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p></span>
      `;
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function fetchForecast() {
  const city = "Johannesburg";
  const country = "ZA";
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`;

  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      const forecastList = data.list;
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate());

      const dailyForecast = {};

      forecastList.forEach((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000);
        const dayString = forecastDate.toLocaleDateString();

        if (forecastDate >= tomorrow && !dailyForecast[dayString]) {
          dailyForecast[dayString] = {
            day: forecastDate.toLocaleString("en-US", { weekday: "long" }),
            tempHigh: Math.round(forecast.main.temp_max),
            tempLow: Math.round(forecast.main.temp_min),
            icon: forecast.weather[0].icon,
          };
        }
      });

      const days = Object.values(dailyForecast).slice(0, 3);
      days.forEach((dayForecast) => {
        forecastDiv.innerHTML += `
          <div class="forecast-item">
            <span>${dayForecast.day}:
            <img src="https://openweathermap.org/img/wn/${dayForecast.icon}@2x.png" alt="weather icon" style="width: 50px; height: auto;">
            Temp: ${dayForecast.tempHigh} / ${dayForecast.tempLow}°C
            </span>
          </div>
        `;
      });
    })
    .catch((error) => console.error("Error fetching forecast data:", error));
}

window.addEventListener("load", () => {
  fetchWeather();
  fetchForecast();
});