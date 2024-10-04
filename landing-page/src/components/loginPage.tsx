import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "../App.css";
import Navbar from "./Navbar.tsx";

const loginPage = () => {
    return (
        <>
            <div className="bg-slate-800 text-white min-h-screen">
                <div className="w-screen h-screen flex flex-col items-center justify-center container mx-auto px-4">
                    <div
                        className="text-center bg-slate-700 p-8 rounded shadow border border-slate-600 max-w-sm w-full">
                        <span className="text-4xl md:text-5xl">Zaloguj się</span>
                        <form>
                            <span className="flex mt-4 text-sm md:text-base">Twój email</span>
                            <input
                                type="text"
                                placeholder="email@example.com"
                                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"
                            />
                            <span className="flex mt-4 text-sm md:text-base">Twoje hasło</span>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"
                            />
                            <span className="flex justify-center mt-4 text-center w-full text-sm md:text-base">
                    Nie masz konta? Załóż je
                    <Link className="text-blue-600 ml-1 hover:text-blue-700 transition" to="/registerPage">tutaj!</Link>
                </span>
                            <input
                                type="submit"
                                value="Zaloguj się"
                                className="mt-4 bg-blue-600 rounded p-4 w-full hover:bg-blue-700 transition focus:bg-blue-800"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default loginPage;
