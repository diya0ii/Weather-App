import React from "react";
import { useState } from "react";
import weatherlogo from '../assets/weatherlogo.svg'; 

const WeatherForm = () => {
    const[city,setCity] = useState("")
    const[weather,setWeather] = useState(null)
    const[error,setError] = useState(null)

    const fetchWeather = async () => {
        try{
            const response = await fetch(`http://127.0.0.1:5000/api/weather?city=${city}`);

            const data = await response.json()
            if(response.ok){
                setWeather(data);
                setError(null);
            }
            else {
                setWeather(null);
                setError(data.error);
            }
            }catch(err){
                setWeather(null);
                setError("failed to fetch data");
        }
    };
    return(
        <div className="bg-white rounded-lg shadow-md p-6 mx-auto my-auto text-center block m-auto">
            <a>
                <img src={weatherlogo} className="logo" alt="weather logo" />
            </a>
            <h1 className="text-2xl font-bold mb-4 text-yellow-950"> Weather App</h1>
            <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="border p-2 w-full mb-2"
            />
            <button onClick={fetchWeather} className="bg-blue-500 text-white px-4 py-2 rounded">
                Get Weather
            </button>
            { weather && (
                <div className="mt-4">
                    <p><strong>City:</strong>{weather.city}</p>
                    <p><strong>Weather:</strong>{weather.weather}</p>
                    <p><strong>Temperature:</strong>{weather.temperature}</p>
                </div>
            )}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default WeatherForm;



