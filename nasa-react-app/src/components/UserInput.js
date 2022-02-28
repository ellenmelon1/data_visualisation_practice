import { useState, useEffect } from 'react';

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
      <select onChange={(event) => setStartYear(event.target.value)}>
        {yearsArray.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
        (
      </select>
      <select onChange={(event) => setEndYear(event.target.value)}>
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
