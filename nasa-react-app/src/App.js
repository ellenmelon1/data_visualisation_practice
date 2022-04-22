import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Map from './components/Map';
import { useState } from 'react';
import media from './Media/luca-iaconelli-7i39CiYfEXA-unsplash.jpg';

function App() {
  const [userInput, setUserInput] = useState({
    startYear: 1600,
    endYear: 2022,
  });

  return (
    <div>
      <img alt="" className="app--img" src={media}></img>
      <div className="app--content">
        <Header />
        <UserInput setUserInput={setUserInput} />
        <Map userInput={userInput} />
      </div>
    </div>
  );
}

export default App;
