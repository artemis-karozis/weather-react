import React from "React";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in London is ${response.data.main.temp}•`);
  }
  let apiKey = "202t323f488633ba301345o8b10a7e9f";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}`;
  axios.get(apiURL).then(handleResponse);
  return <h2>Hello from Weather App</h2>;
}
