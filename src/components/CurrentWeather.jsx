import "./CurrentWeather.css";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";
export default function CurrentWeather({ weatherData }) {

  if (!weatherData) {
    return null;
  }


  let weatherIcon;

switch (weatherData.weather[0].main) {

  case "Clear":
    weatherIcon = <WiDaySunny size={90} />;
    break;

  case "Clouds":
    weatherIcon = <WiCloudy size={90} />;
    break;

  case "Rain":
    weatherIcon = <WiRain size={90} />;
    break;

  case "Thunderstorm":
    weatherIcon = <WiThunderstorm size={90} />;
    break;

  case "Snow":
    weatherIcon = <WiSnow size={90} />;
    break;

  case "Mist":
  case "Fog":
    weatherIcon = <WiFog size={90} />;
    break;

  default:
    weatherIcon = <WiDaySunny size={90} />;
}
  return (
    <section className="current-weather">
      <div className="weather-icon">
  {weatherIcon}
</div>

      <h2>{weatherData.name}</h2>

      <h1>{Math.round(weatherData.main.temp)}°C</h1>

      <p>{weatherData.weather[0].main}</p>

      <span>
        Feels Like {Math.round(weatherData.main.feels_like)}°C
      </span>

    </section>
  );
}