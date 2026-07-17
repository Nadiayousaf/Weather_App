import "./ForecastCard.css";

export default function ForecastCard({
  time,
  temp,
  condition,
  icon,
}) {

const hour = new Date(time).toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

  return (
    <div className="forecast-card">

      <h4>{hour}</h4>

      <img
        className="forecast-weather-icon"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={condition}
      />

      <h3>{temp}°C</h3>

      <p>{condition}</p>

    </div>
  );
}