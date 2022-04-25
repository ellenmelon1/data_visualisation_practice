import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const UserInput = ({ setUserInput }) => {
  const year = new Date().getFullYear();
  const yearsArray = Array.from(new Array(100), (val, index) => year - index);

  const [startYear, setStartYear] = useState(2010);
  const [endYear, setEndYear] = useState(year);

  useEffect(() => {
    const userInput = {
      startYear: startYear,
      endYear: endYear,
    };
    setUserInput(userInput);
  }, [startYear, endYear]);

  return (
    <div className="input_buttons">
      <Form.Select
        className="start_year_button"
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
      </Form.Select>
      <Form.Select
        className="end_year_button"
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
      </Form.Select>
    </div>
  );
};

export default UserInput;
