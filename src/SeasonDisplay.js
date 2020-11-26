import React from "react";
import { render } from "react-dom";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const vreme = season === "winter" ? "Brr, ladn" : "lets hit the beach";
  const icon = season === "winter" ? "snowflake" : "sun";

  // const text = season == "winter" ? "Brr, ladn" : "lets hit the beach"
  //{text} staviti u h1
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{vreme}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
