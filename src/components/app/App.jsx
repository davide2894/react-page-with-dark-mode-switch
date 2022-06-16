import "./App.scss";
import Navbar from "../navbar/Navbar";
import Main from "../main/Main" ;

function App() {
  return (
    <div className="app">
      <Navbar darkMode=""/>
      <Main darkMode=""/>
    </div>
  );
}

export default App;
