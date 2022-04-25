import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
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
