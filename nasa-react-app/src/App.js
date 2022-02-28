import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({});

  return (
    <div>
      <Header />
      <UserInput setUserInput={setUserInput} />
    </div>
  );
}

export default App;
