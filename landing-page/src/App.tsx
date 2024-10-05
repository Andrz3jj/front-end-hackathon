import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Exoplanets from "./components/Exoplanets";
import MainPage from "./components/MainPage";
import Forum from "./components/Forum";
import AboutUs from "./components/AboutUs";
import loginPage from "./components/LoginPage";
import RegisterPage from "./components/registerPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Exoplanets" element={<Exoplanets/>}/>
                <Route path="/Forum" element={<Forum/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/loginPage" element={<loginPage/>}/>
                <Route path="/registerPage" element={<RegisterPage/>} />
            </Routes>
        </Router>
    );
};

export default App;
