import React from "react";

export default function TodayTemperature({ weatherData }) {
  return (
    <div className="TodayTemperature">
      <h1 className="location" id="search-location">
        London
      </h1>
      <div className="country" id="country-weather">
        United Kingdom
      </div>
      <img src="" alt="" id="current-icon" />
      <h2 className="today-temp">
        <span id="todays-temperature-main">20</span>
        <span className="degree-symbol">°C</span>
      </h2>

      <h3 className="today-detail">
        Today <br />
        <div id="weather-description"></div>
      </h3>
      <div className="last-updated">
        <div>
          <span>Last updated: </span>
          <span className="time-stamp" id="todays-day-time">
            12.00pm
          </span>
        </div>
      </div>

      <div className="humidity-wind">
        <div>
          Humidity: <span id="humidity"></span>%
        </div>
        <div>
          Wind: <span id="wind"></span>km/h
        </div>
      </div>
    </div>
  );
}
