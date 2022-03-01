import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

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
  }, [startYear, endYear]);

  const mapOutput = isLoading ? (
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  ) : (
    meteoriteData.slice(0, 5).map((data) => {
      {
        console.log(typeof Number(data.reclong));
      }
      return (
        <Marker
          key={data.id}
          position={[Number(data.reclong), Number(data.reclat)]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      );
    })
  );

  return (
    <MapContainer center={[51.505, -0.09]} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapOutput}
    </MapContainer>
  );
}

export default Map;
