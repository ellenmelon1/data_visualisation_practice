import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

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
    <div>
      <Form.Select onChange={(event) => setStartYear(event.target.value)}>
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
    </div>
  );
};

export default UserInput;
