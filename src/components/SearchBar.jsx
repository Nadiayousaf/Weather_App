import { useState } from "react";
import "./SearchBar.css";
import { IoSearch, IoRefresh} from "react-icons/io5";

export default function SearchBar({ onSearch, onRefresh }) {
    const [city, setCity] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (city.trim() === "") {
            alert("Please enter a city name");
            return;
        }

        onSearch(city);

        setCity("");
    }

    return (
        <div className="Search-Container">
            <form className="weather-form" onSubmit={handleSubmit}>
                <IoSearch size={20} color="white" />

                <input
                    type="text"
                    placeholder="Search city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <button type="submit">
                    Search
                </button>
            </form>
            <button
                type="button"
                className="refresh-btn"
                onClick={onRefresh}
            >
                <IoRefresh size={43} />
            </button>

        </div>
    );
}