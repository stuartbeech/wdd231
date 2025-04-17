export async function getWeather(lat, lon) {
    const apiKey = "54362e31f8a9437dfcce17bfafd155ad";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return `${data.weather[0].description}, ${data.main.temp}°C`;
    } catch (err) {
        console.error(err);
        return "Weather unavailable";
    }
}