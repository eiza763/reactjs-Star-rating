import { useState } from "react";
import Accordion from "./Components/Accordion.jsx";
import RandomColor from "./Components/random-color.jsx";
import StarRating from "./Components/StarRating.jsx";

//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import "./App.css";

function App() {


  return (
    <div className="App">
      <h1>React Components Demo</h1>
      {/*<Accordion />*/}
      {/*<RandomColor/>*/}
      <StarRating noOfStars={5} />
    </div>
  );
}

export default App;
