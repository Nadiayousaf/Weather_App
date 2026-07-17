import "./WeatherCards.css";
import WeatherCard from "./WeatherCard";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";

export default function WeatherCards({ weatherData }) {

  if (!weatherData) {
    return null;
  }

  return (
    <section className="weather-cards-container">

      <WeatherCard
        icon={<WiStrongWind />}
        title="Wind"
        value={`${weatherData.wind.speed} m/s`}
      />

      <WeatherCard
        icon={<WiHumidity />}
        title="Humidity"
        value={`${weatherData.main.humidity}%`}
      />

      <WeatherCard
        icon={<WiBarometer />}
        title="Pressure"
        value={`${weatherData.main.pressure} hPa`}
      />

    </section>
  );
}