import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Exoplanets from "./components/Exoplanets";
import MainPage from "./components/MainPage";
import Forum from "./components/Forum";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import exoplanet from "./assets/exoplanet.png";
import aboutUs from "./assets/aboutUs.png";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Exoplanets" element={<Exoplanets/>}/>
                <Route path="/Forum" element={<Forum/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
            </Routes>
        </Router>
    );
};

export default App;
