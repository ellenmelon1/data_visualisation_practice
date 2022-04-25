import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import './Map.css';

function Map({ startYear, endYear }) {
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
  }, [startYear, endYear, url]);

  const meteorite = new Icon({
    iconUrl: require('../Media/meteorite.png'),
    iconSize: [25, 25],
  });

  const mapOutput = isLoading ? (
    <Marker position={[51.505, -0.09]}></Marker>
  ) : (
    meteoriteData.map((data) => {
      if (data.hasOwnProperty('reclong') && data.hasOwnProperty('reclat')) {
        return (
          <Marker
            key={data.id}
            position={[Number(data.reclat), Number(data.reclong)]}
            icon={meteorite}
          >
            <Popup>
              {data.name} {data.recclass} {data.mass} <br />
            </Popup>
          </Marker>
        );
      }
      return null;
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
