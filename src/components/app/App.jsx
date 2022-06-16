import "./App.scss";
import Navbar from "../navbar/Navbar";
import Main from "../main/Main" ;
import { useState } from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  function togglerClickHandler(){
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
  }

  return (
    <div className="app">
      <Navbar darkMode={isDarkMode} togglerClickHandler={togglerClickHandler}/>
      <Main darkMode={isDarkMode} togglerClickHandler={togglerClickHandler}/>
    </div>
  );
}

export default App;
