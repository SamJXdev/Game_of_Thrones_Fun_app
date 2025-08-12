import React from "react";
import { Link } from "react-router-dom/dist/index.d.mts";
import logo from "./assets/logo.png";
function App(){
  return(
    <>
      <nav className="navbar">
      <h2 className="logo"><img src={logo} alt="got logo" className="logo-img"/>GAME OF THRONES</h2>
      <ul className="nav-list">
      <li><Link to="/">Home</Link></li>
      <li>Trivia</li>
      </ul>
      </nav>
    </>

  )
}

export default App;