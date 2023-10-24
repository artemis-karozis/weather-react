import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in London is ${response.data.temperature.current}•`);
  }
  let apiKey = "202t323f488633ba301345o8b10a7e9f";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}`;
  axios.get(apiURL).then(handleResponse);
  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
