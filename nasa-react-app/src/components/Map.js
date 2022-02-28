import React from 'react';
import { useState, useEffect } from 'react';

function Map({ userInput }) {
  const { startYear, endYear } = userInput;

  const [isLoading, setIsLoading] = useState(true);
  const [meteoriteData, setMeteoriteData] = useState([]);

  const url = `https://data.nasa.gov/resource/gh4g-9sfh.json?$where=date_extract_y(year) between ${startYear} and ${endYear}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setMeteoriteData(response);
        setIsLoading(false);
      });
  }, []);

  const mapOutput = isLoading ? (
    <h3>LOADING</h3>
  ) : (
    <ul>
      {meteoriteData.map((data) => {
        return <li key={data.name}>{data.name}</li>;
      })}
    </ul>
  );

  return <div>{mapOutput}</div>;
}

export default Map;
