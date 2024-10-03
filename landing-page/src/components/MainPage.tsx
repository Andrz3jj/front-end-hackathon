import React from "react";
import "../App.css";
// import Navbar from "./components/Navbar.jsx";
// import Exoplanets from "./components/Exoplanets";
// import Forum from "./components/Forum";
// import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import exoplanet from "../assets/exoplanet.png";
import aboutUs from "../assets/aboutUs.png";

const MainPage = () => {
    return (
        <div className="bg-slate-700 background">
            <div className="w-screen h-screen flex flex-col items-center justify-center container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center md:items-start p-4 md:p-8">
                    <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start mt-16">
                        <span
                            className="text-2xl md:text-4xl font-bold text-center text-white">Odkrywaj Nowe Światy!</span><br/>
                        <span className="text-gray-600 text-sm md:text-md text-center text-white">
                                        Przeglądaj tysiące planet krążących wokół innych gwiazd,<br/>
                                        odkrywaj fascynujące światy i dowiedz się,<br/>
                                        jak mogą wyglądać egzoplanety poza naszym Układem Słonecznym.<br/>
                                        <Link to="/Exoplanets"
                                              className="text-center bg-blue-600 text-white shadow p-2 md:p-3 rounded hover:bg-blue-700 transition inline-flex items-center mt-4 md:mt-6">
                                        Poznaj egzoplanety
                                        <Icon.ArrowRight size={20} color="white" className="ml-2"/>
                                        </Link>
                                    </span>
                    </div>
                    <div className="flex justify-center md:justify-end sm:mt-8 md:mt-0 md:w-1/2">
                        <img src={exoplanet} alt="egzoplaneta"
                             className="max-w-xs md:max-w-xs lg:max-w-sm"/>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center md:items-start mt-16">
                    <div className="flex flex-col items-center md:items-start md:w-1/2">
                        <img src={aboutUs} alt="aboutUs" className="max-w-xs md:max-w-xs lg:max-w-sm rounded"/>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center text-center md:text-left md:w-1/2 mt-8">
                        <span className="text-2xl md:text-4xl font-bold text-white">Prawy Przycisk Myszy</span><br/>
                        <span className="text-gray-600 text-sm md:text-md text-center text-white">
                                        Cześć, jesteśmy grupą pasjonatów technologii<br/>
                                        Naszym celem jest stworzenie innowacyjnej strony internetowej poświęconej egzoplanetom.<br/>
                                        Chcemy zainspirować ludzi do odkrywania tajemnic wszechświata,<br/>
                                        przeglądania fascynujących światów krążących wokół innych gwiazd oraz dzielenia się najnowszymi odkryciami naukowymi.<br/>
                                        <Link to="/AboutUs"
                                              className="text-center bg-blue-600 text-white shadow p-2 md:p-3 rounded hover:bg-blue-700 transition inline-flex items-center mt-4 md:mt-6">
                                        Poznaj nasz team
                                        <Icon.ArrowRight size={20} color="white" className="ml-2"/>
                                        </Link>
                                    </span>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default MainPage;

