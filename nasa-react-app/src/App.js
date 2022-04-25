import './App.css';
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import media from './Media/Time Lapse Video Of Milky Way Galaxy.mp4';

function App() {
  return (
    <div>
      <div>
        <video loop autoPlay muted className="video">
          <source src={media} type="video/mp4" />
        </video>
      </div>
      <div className="all_content">
        <Header />
        <UserInput />
      </div>
    </div>
  );
}

export default App;
