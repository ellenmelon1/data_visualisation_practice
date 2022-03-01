import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

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
    <Container className="mt-2">
      <Form.Select onChange={(event) => setStartYear(event.target.value)}>
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
      <Form.Select onChange={(event) => setEndYear(event.target.value)}>
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
      <Form.Label>Input date range</Form.Label>
    </Container>
  );
};

export default UserInput;
