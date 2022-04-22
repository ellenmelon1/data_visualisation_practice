import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Map from './components/Map';
import { useState } from 'react';
import media from './Media/Time Lapse Video Of Milky Way Galaxy.mp4';

function App() {
  const [userInput, setUserInput] = useState({
    startYear: 1600,
    endYear: 2022,
  });

  return (
    <div>
      <div>
        <video loop autoPlay muted className="video">
          <source src={media} type="video/mp4" />
        </video>
      </div>
      <div className="all_content">
        <Header />
        <UserInput setUserInput={setUserInput} />
        <Map userInput={userInput} />
      </div>
      <div className="space"></div>
    </div>
  );
}

export default App;
