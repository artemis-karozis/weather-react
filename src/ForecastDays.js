import React from "react";
import "./ForecastDays.css";

export default function ForecastDays() {
  return (
    <div className="ForecastDays">
      <div className="row forecast-rows">
        <div className="col-4 d-flex align-items-center justify-content-center future-day">
          Thu
        </div>
        <div className="col-4 d-flex justify-content-center text-center forecast-icons">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt=""
            width="50"
          />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center forecast-max-min">
          <span className="max-temp">{20}°</span>
          <span className="min-temp">{10}°</span>
        </div>
      </div>
    </div>
  );
}
