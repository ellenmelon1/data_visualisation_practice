import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({startYear: 1600,
  endYear: 2022});

  return (
    <div>
      <Header />
      <UserInput setUserInput={setUserInput} />
      <Map userInput={userInput} />
    </div>
  );
}

export default App;
