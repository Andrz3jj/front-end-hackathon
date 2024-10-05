import { useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/logo-navbar.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleInfoDropdown = () => {
        setIsInfoDropdownOpen(!isInfoDropdownOpen);
    };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`shadow sticky top-0 bg-slate-900 text-white z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
                    <div className="relative">
                        <button
                            className="text-2xl m-2 hover:bg-slate-950 rounded p-2 transition active:shadow-xl focus:outline-none flex items-center"
                            onClick={toggleDropdown}
                        >
                            Community
                            <svg className={`w-4 h-4 ml-2 transition-transform transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute bg-slate-800 rounded-lg mt-2 p-2 space-y-2 z-50 transition-all transform scale-y-100 opacity-100 origin-top duration-300">
                                <Link className="block px-4 py-2 text-white hover:bg-slate-700 rounded" to="/forum">
                                    Forum
                                </Link>
                                <Link className="block px-4 py-2 text-white hover:bg-slate-700 rounded" to="/events">
                                    Wyzwania
                                </Link>
                                <Link className="block px-4 py-2 text-white hover:bg-slate-700 rounded" to="/exoplanets">
                                    ExoSearch
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            className="text-2xl m-2 hover:bg-slate-950 rounded p-2 transition active:shadow-xl focus:outline-none flex items-center"
                            onClick={toggleInfoDropdown}
                        >
                            Info
                            <svg className={`w-4 h-4 ml-2 transition-transform transform ${isInfoDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isInfoDropdownOpen && (
                            <div className="absolute bg-slate-800 rounded-lg mt-2 p-2 space-y-2 z-50 transition-all transform scale-y-100 opacity-100 origin-top duration-300">
                                <Link className="block px-4 py-2 text-white hover:bg-slate-700 rounded" to="/aboutUs">
                                    O nas
                                </Link>
                                <Link className="block px-4 py-2 text-white hover:bg-slate-700 rounded" to="/kontakt">
                                    Kontakt
                                </Link>
                                <Link className="block px-4 py-2 text-white hover:bg-slate-700 rounded" to="/faq">
                                    FAQ
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link className="text-2xl m-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-center rounded p-2 transition active:shadow-xl" to="/loginPage">Zaloguj się</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
