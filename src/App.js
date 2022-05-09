import axios from "axios";
import { useEffect, useState } from "react";


import Weather from "./Components/Weather";
import "./Components/styles/App.css";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
