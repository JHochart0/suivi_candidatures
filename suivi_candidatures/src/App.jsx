import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import NotFound404 from './pages/NotFound404.jsx';
import Navbar from './Components/Navbar.jsx';


import './css/App.css';


function App() {
  return (
    <Router>
        <div className="App">
            
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<NotFound404/>} />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

export default App;
