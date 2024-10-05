import "../App.css";

const Challenges = () => {
    return (
        <>
            <div className="bg-slate-800 text-white min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    {/* Title with animation */}
                    <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">Wyzwania dnia</h1>

                    {/* Subheading or description */}
                    <p className="text-lg md:text-2xl text-gray-400">
                        Get ready for today's challenges!
                    </p>

                    {/* Cool animated button */}
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 ease-in-out rounded-md shadow-lg transform hover:scale-105 focus:outline-none">
                        Start Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Challenges;
