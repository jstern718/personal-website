import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import './App.css';

import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/Experience" element={<Experience/>} />
                <Route path="/Skills" element={<Skills/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
