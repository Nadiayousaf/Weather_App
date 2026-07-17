import "./HourlyForecast.css";
import ForecastCard from "./ForecastCard";

export default function HourlyForecast({ forecastData }) {

  if (!forecastData) return null;

  return (
    <section className="forecast-container">

      {forecastData.list.slice(0,8).map((hour) => (

        <ForecastCard
          key={hour.dt}
          time={hour.dt_txt}
          temp={Math.round(hour.main.temp)}
          condition={hour.weather[0].main}
          icon={hour.weather[0].icon}
        />

      ))}

    </section>
  );
}