import "./WeatherCard.css";

export default function WeatherCard({ icon, title, value }) {
  return (
    <div className="weather-card">

      <div className="card-icon">
        {icon}
      </div>

      <h3 className="card-title">
        {title}
      </h3>

      <p className="card-value">
        {value}
      </p>

    </div>
  );
}