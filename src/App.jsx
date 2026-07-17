import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherCards from "./components/WeatherCards";
import HourlyForecast from "./components/HourlyForecast";
import Loading from "./components/Loading";

import { fetchWeather } from "./services/weatherApi";
import { fetchForecast } from "./services/forecastApi";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getWeather(city) {
    try {
      setLoading(true);

      const data = await fetchWeather(city);
      const forecast = await fetchForecast(city);

      console.log("Weather Data:", data);
      console.log("Forecast:", forecast);

      setWeatherData(data);
      setCurrentCity(city);
      setForecastData(forecast);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleRefresh() {
    if (currentCity) {
      getWeather(currentCity);
    }
  }

  // Weather type
  const weatherType =
    weatherData?.weather?.[0]?.main?.toLowerCase() || "clear";

  return (
    <div className={`container ${weatherType}`}>
      {/* Background Effects */}
      <div className="weather-effects">
        {/* Sun */}
        {weatherType.includes("clear") && <div className="sun"></div>}

        {/* Clouds */}
        {weatherType.includes("cloud") && (
          <>
            <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
          </>
        )}

        {/* Rain */}
        {weatherType.includes("rain") && (
          <div className="rain">
            {Array.from({ length: 40 }).map((_, index) => (
              <span key={index}></span>
            ))}
          </div>
        )}
      </div>

      {/* Loading */}
      {loading && <Loading />}

      <SearchBar
        onSearch={getWeather}
        onRefresh={handleRefresh}
      />

      <CurrentWeather weatherData={weatherData} />

      <WeatherCards weatherData={weatherData} />

      <HourlyForecast forecastData={forecastData} />
    </div>
  );
}

export default App;