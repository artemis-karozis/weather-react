import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Search({ setWeatherData }) {
  const [city, setCity] = useState("");
  const apiKey = "202t323f488633ba301345o8b10a7e9f";

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
      );
      console.log(response.data);
      setWeatherData({
        temperature: response.data.temperature.current,
        city: response.data.city,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        country: response.data.country,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="Search">
      <form id="location-search" onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center text-center search-engine">
          <div className="col-7 search-box">
            <input
              type="text"
              placeholder="Enter your city"
              className="form-control shadow-sm"
              autofocus="on"
              id="search-input"
              onChange={handleInputChange}
              value={city}
            />
          </div>
          <div className="col-md-auto">
            <input
              type="submit"
              value="Search"
              className="btn btn-success shadow-sm search_button"
              id="search-button"
            />
          </div>
          <div className="col-md-auto p-0">
            <button className="btn btn-light exact-location-btn">
              <FontAwesomeIcon icon={faLocationCrosshairs} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
