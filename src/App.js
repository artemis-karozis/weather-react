import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./styles.css";
import "./Search.css";
import "./TodayTemperature.css";
import "./Forecast.css";
import "./ForecastDays.css";
import "./Footer.css";

import Search from "./Search";
import TodayTemperature from "./TodayTemperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <div className="container-wrapper">
          <Search setWeatherData={setWeatherData} />
          <div className="row mx-auto">
            <div className="col-sm-6 d-flex align-items-center justify-content-center today">
              <TodayTemperature weatherData={weatherData} />
            </div>
            <div className="col-sm-6 future">
              <Forecast />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
