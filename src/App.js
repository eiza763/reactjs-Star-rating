import { useState } from "react";
import Accordion from "./Components/Accordion.jsx";
import RandomColor from "./Components/random-color.jsx";

//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";

function App() {


  return (
    <div className="App">
      <h1>React Accordion</h1>
      <Accordion />
      <RandomColor/>
    </div>
  );
}

export default App;
