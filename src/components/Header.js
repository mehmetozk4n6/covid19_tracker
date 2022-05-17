import React from "react";

function Header() {
  return (
    <div>
      <img
        style={{ width: "50%" }}
        src="https://www.iku.edu.tr/sites/default/files/2020-03/corona_slide_1.jpg"
        alt="covid-19"
        loading="lazy"
      />
      <h2>Global and Country Wise Cases of Corona Virus</h2>
      <p style={{ fontSize: "1.2em" }}>
        <i>(For a Particular select a Country from Below)</i>
      </p>
    </div>
  );
}

export default Header;
