import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <small>
        This project by Artemis Karozis and is
        <a
          href="https://github.com/artemis-karozis/weather-react"
          target="blank"
          className="open-source-link"
        >
          Open-source code
        </a>{" "}
      </small>
    </div>
  );
}
