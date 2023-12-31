import React from "react";
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

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-wrapper">
          <Search />
          <div className="row mx-auto">
            <div className="col-sm-6 d-flex align-items-center justify-content-center today">
              <TodayTemperature />
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

export default App;
