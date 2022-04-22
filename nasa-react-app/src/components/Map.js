import React from 'react';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

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
    meteoriteData.map((data) => {
      if (data.hasOwnProperty('reclong') && data.hasOwnProperty('reclat')) {
        return (
          <Marker
            key={data.id}
            position={[Number(data.reclat), Number(data.reclong)]}
          >
            <Popup>
              {data.name} {data.recclass} {data.mass} <br />
            </Popup>
          </Marker>
        );
      }
    })
  );

  return (
    <Container>
      <Col>
        <Row>
          <MapContainer center={[51.505, -0.09]} zoom={2}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapOutput}
          </MapContainer>
        </Row>
      </Col>
    </Container>
  );
}

export default Map;
