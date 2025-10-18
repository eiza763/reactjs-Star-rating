import { useState } from "react";

import StarRating from "./Components/StarRating.jsx";

function App() {


  return (
    <div className="App">
      <h1>React Components Demo</h1>
     
      <StarRating noOfStars={5} />
    </div>
  );
}

export default App;
