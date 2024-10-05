import React from 'react';
import Roadmap from "./RoadMap.tsx"

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between">
            {/* Main Content */}
            <div className="p-8 bg-slate-800 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Forum Activity */}
                    <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-200">
                        <h2 className="text-xl font-bold mb-4">Ostatnia aktywność na forum:</h2>
                        <p className="min-h-24">Brak aktywności na forum. Sprawdź później.</p>
                    </div>

                    {/* Best Teams */}
                    <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-200">
                        <h2 className="text-xl font-bold mb-4">Najlepsze teamy</h2>
                        <ul className="space-y-2 min-h-24">
                            <li>Team Alpha - 1500 pkt</li>
                            <li>Team Beta - 1350 pkt</li>
                            <li>Team Gamma - 1280 pkt</li>
                        </ul>
                    </div>

                    {/* Last Team Battles */}
                    <div className="bg-slate-700 p-6 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-200">
                        <h2 className="text-xl font-bold mb-4">Ostatnie bitwy teamowe:</h2>
                        <ul className="space-y-2 min-h-24">
                            <li>Alpha vs Beta - 3:2</li>
                            <li>Gamma vs Delta - 1:3</li>
                            <li>Beta vs Epsilon - 4:0</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-slate-700 hover:bg-slate-600 transition-colors duration-200 text-white p-4 w-full rounded-lg shadow-lg">Ostatnia lekcja </button>
                    <button className="bg-slate-700 hover:bg-slate-600 transition-colors duration-200 text-white p-4 w-full rounded-lg shadow-lg">Twój team</button>
                </div><br/>
        
                <Roadmap/>

            </div>
        </div>
    );
};

export default Dashboard;
