import React, { useState } from "react";
import "../App.css";
import logo from "../assets/logo-navbar.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="shadow sticky top-0 bg-slate-900 text-white z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 md:px-12">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src={logo} className="w-12 mr-2" alt="ExoSky Logo" />
                    <Link className="text-2xl font-semibold" to="/">ExoSearch</Link>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? (
                            <svg className="w-6 h-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`flex flex-col md:flex-row md:space-x-4 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden md:overflow-visible md:max-h-none`}>
                    <Link className="text-2xl m-2 hover:bg-slate-950 rounded p-2 transition active:shadow-xl" to="/Exoplanets">Egzoplanety</Link>
                    <Link className="text-2xl m-2 hover:bg-slate-950 rounded p-2 transition active:shadow-xl" to="/Forum">Forum</Link>
                    <Link className="text-2xl m-2 hover:bg-slate-950 rounded p-2 transition active:shadow-xl" to="/AboutUs">O nas</Link>
                    <Link className="text-2xl m-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded p-2 transition active:shadow-xl" to="/loginPage">Zaloguj się</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
