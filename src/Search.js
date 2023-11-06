import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const apiKey = "202t323f488633ba301345o8b10a7e9f";
  let city = "Sydney";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  return (
    <div className="Search">
      <form id="location-search">
        <div className="row d-flex justify-content-center text-center search-engine">
          <div className="col-7 search-box">
            <input
              type="search"
              placeholder="Enter your city"
              className="form-control shadow-sm"
              autofocus="on"
              id="search-input"
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
              {/* <i
                id="current-location-btn"
                className="fa-solid fa-location-crosshairs"
              ></i> */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
