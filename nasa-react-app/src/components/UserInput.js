import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserInput = ({ setUserInput }) => {
  const year = new Date().getFullYear();
  const yearsArray = Array.from(new Array(100), (val, index) => year - index);

  const [startYear, setStartYear] = useState(1600);
  const [endYear, setEndYear] = useState(year);

  useEffect(() => {
    const userInput = {
      startYear: startYear,
      endYear: endYear,
    };
    setUserInput(userInput);
  }, [startYear, endYear]);

  return (
    <Container>
      <Row>
        <Col>
          <Form.Select
            className="m-3 "
            onChange={(event) => setStartYear(event.target.value)}
          >
            <option value={yearsArray.splice(-1)}>Select Start Year</option>
            {yearsArray.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
            (
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            className="m-3"
            onChange={(event) => setEndYear(event.target.value)}
          >
            <option value={yearsArray.splice(0, 1)}>Select End Year</option>
            {yearsArray.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
            (
          </Form.Select>
        </Col>
        {/* <Col>
          <Form.Label className="m-3 ">Input date range</Form.Label>
        </Col> */}
      </Row>
      <Row></Row>
    </Container>
  );
};

export default UserInput;
