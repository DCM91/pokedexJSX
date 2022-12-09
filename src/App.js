import React from "react";
import "./App.css";
import NavBar from "./Components/layout/NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashborad from "./Components/layout/Dashborad";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashborad></Dashborad>
      </div>
    </div>
  );
}

export default App;
