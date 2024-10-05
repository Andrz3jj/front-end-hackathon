import React from 'react';

const WelcomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-600 to-slate-700 text-white text-center">
            <h1 className="text-5xl font-bold">Welcome to the Welcome Page!</h1>
            <p className="text-xl mt-4 mb-6">We're glad to have you here. Let's get started!</p>
            <button
                className="px-6 py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-400 hover:text-white transition duration-300 ease-in-out"
                onClick={() => alert('Button Clicked!')}
            >
                Get Started
            </button>
        </div>
    );
};

export default WelcomePage;
