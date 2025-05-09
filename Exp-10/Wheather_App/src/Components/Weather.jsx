import React, { useState } from 'react'
import axios from 'axios'
import './Weather.css' // Import the CSS file

const Weather = () => {
    const [inp, setinp] = useState('');
    const [weather, setWeather] = useState(null);

    const searchWeather = () => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=4179994c89c04061bd131521250905&q=${inp}`)
            .then((res) => {
                setWeather(res.data);
            })
            .catch((err) => {
                console.error(err);
                alert("Error fetching weather. Please check the city name.");
            });
    }

    return (
        <>
            <div className="center">
                <input
                    type="text"
                    className="inp"
                    placeholder="Enter city name..."
                    value={inp}
                    onChange={(e) => setinp(e.target.value)}
                />
                <button onClick={searchWeather}>Search</button>

                {weather && (
                    <div className="weather-info">
                        <h2>{weather.location.name}, {weather.location.region}, {weather.location.country}</h2>
                        <p>Time Zone: {weather.location.tz_id}</p>
                        <p>Local Time: {weather.location.localtime}</p>
                        <p>Condition: {weather.current.condition.text}</p>
                        <img src={weather.current.condition.icon} alt="Weather Icon" />
                        <p>Feels Like: {weather.current.feelslike_c}°C</p>
                        <p>Last Updated: {weather.current.last_updated}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Weather;
