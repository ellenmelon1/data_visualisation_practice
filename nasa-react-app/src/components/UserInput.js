import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Map from './Map';

const UserInput = () => {
  // 2012 chosen as latest year because this is when NASA stops providing data
  const year = 2012;
  // creates a new array 60 elements long, counting back from 2012
  const yearsArray = Array.from(new Array(60), (val, index) => year - index);

  const [startYear, setStartYear] = useState(2010);
  const [endYear, setEndYear] = useState(year);

  return (
    <div>
      <div className="input_buttons">
        <Form.Select
          className="start_year_button"
          onChange={(event) => setStartYear(event.target.value)}
        >
          <option value={2010}>Select Start Year</option>
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
          <option value={2012}>Select End Year</option>
          {yearsArray.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <Map startYear={startYear} endYear={endYear} />
    </div>
  );
};

export default UserInput;
