import React from "react";
import { useState, useEffect } from "react";

function Map({ userInput }) {
  const { startYear, endYear } = userInput;

  const [isLoading, setIsLoading] = useState(true);
  const [meteoriteData, setMeteoriteData] = useState([]);

  useEffect(() => {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then((response) => response.json())
      .then((response) => {
        setMeteoriteData(response);
        setIsLoading(false);
      });
  }, []);

  const mapOutput = isLoading ? <h3>LOADING</h3> : <p></p>;

  return <div>Map</div>;
}

export default Map;
