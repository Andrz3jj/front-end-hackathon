import React from 'react';
import Particles from './ui/particles';
import {Link} from 'react-router-dom';

const color = "#ffffff";

const WelcomePage: React.FC = () => {
    return (
        <main className="fixed inset-0 min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-800 to-black">
            <div className="absolute inset-0 z-0">
                <Particles 
                    className="absolute inset-0"
                    quantity={100}
                    ease={100}
                    color={color}
                    refresh
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
            </div>
           
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-6 pt-[80px]">
                <h1 className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent text-6xl md:text-8xl font-extrabold tracking-tight">
                    ExoSearch
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl px-4">
                   Znajdź swoją wymarzoną planetę! I Konkuruj z innymi użytkownikami o miejsce w Rankingu Mistrzów!
                </p>
                <Link className="px-6 py-3 mt-4 bg-pink-600 text-white rounded-full text-lg font-medium transition-transform transform hover:scale-105" to="/LoginPage">
                    Exploruj Teraz
                </Link>
            </div>
        </main>
    );
};

export default WelcomePage;