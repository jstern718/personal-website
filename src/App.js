import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import './App.css';

import Resume from "./Resume";
import Projects from "./Projects";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
        <p>app</p>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/Resume" element={<Resume/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
