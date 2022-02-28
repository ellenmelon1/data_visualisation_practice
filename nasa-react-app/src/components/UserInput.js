import { useState } from 'react';

const UserInput = () => {
  const year = new Date().getFullYear();
  const yearsArray = Array.from(new Array(100), (val, index) => year - index);

  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();

  return (
    <div>
      <select>
        {yearsArray.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
        (
      </select>
      <select>
        {yearsArray.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
        (
      </select>

      <label>Input date range</label>
    </div>
  );
};

export default UserInput;
