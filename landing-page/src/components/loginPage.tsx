import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "../App.css";
import Navbar from "./Navbar.tsx";

const loginPage = () => {
    return (
        <>
            <div className="bg-slate-800 text-white min-h-screen">
                <div className="w-screen h-screen flex flex-col items-center justify-center container mx-auto">
                    <div className="text-center bg-slate-700 p-8 rounded shadow border border-slate-600">
                        <span className="text-4xl">Zaloguj się</span>
                        <form>
                            <span className="flex mt-4">Twój email</span>
                            <input type="text" placeholder="email@example.com"
                                   className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-80 focus:outline-none focus:shadow-lg transition"/>
                            <span className="flex mt-4">Twoje hasło</span>
                            <input type="password" placeholder="••••••••"
                                   className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-80 focus:outline-none focus:shadow-lg transition"/>
                            <span className="flex justify-center mt-4 text-center w-full">
                                Nie masz konta? Załóż je
                                <Link className="text-blue-600 ml-1 hover:text-blue-700 transition" to="/registerPage">tutaj!</Link>
                            </span>
                            <input type="submit" value="Zaloguj się"
                                   className="mt-4 bg-blue-600 rounded p-4 w-full hover:bg-blue-700 transition focus:bg-blue-800"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default loginPage;
