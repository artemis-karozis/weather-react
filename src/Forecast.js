import React from "react";
import ForecastDays from "./ForecastDays";

import "./ForecastDays.css";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <ForecastDays />
      <ForecastDays />
      <ForecastDays />
      <ForecastDays />
      <ForecastDays />
      <ForecastDays />
      <ForecastDays />
    </div>
  );
}
