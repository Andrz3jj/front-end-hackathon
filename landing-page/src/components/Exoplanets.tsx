import { useState } from 'react';
import "../App.css";
import { Search, Planet, Star, ThermometerHalf, Rulers, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const examplePlanets = [
  {
    name: "Kepler-186f",
    distance: "582 light years",
    type: "Super Earth",
    temperature: "188K",
    discovered: "2014",
    star: "Kepler-186"
  },
  {
    name: "TRAPPIST-1e",
    distance: "39 light years",
    type: "Rocky Earth-like",
    temperature: "251K",
    discovered: "2017",
    star: "TRAPPIST-1"
  },
  {
    name: "Proxima Centauri b",
    distance: "4.2 light years",
    type: "Super Earth",
    temperature: "234K",
    discovered: "2016",
    star: "Proxima Centauri"
  }
];

const ExoplanetCard = ({ planet }) => (
  <div className="bg-slate-700 border border-slate-600 rounded hover:bg-slate-600 transition-colors duration-200">
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{planet.name}</h3>
          <div className="flex items-center text-gray-300 text-sm mb-1">
            <div className="w-4 h-4 mr-2" />
            <span>{planet.star}</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm mb-1">
            <div className="w-4 h-4 mr-2" />
            <span>{planet.type}</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm mb-1">
            <div className="w-4 h-4 mr-2" />
            <span>{planet.temperature}</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm mb-1">
            <div className="w-4 h-4 mr-2" />
            <span>{planet.distance}</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <div className="w-4 h-4 mr-2" />
            <span>Discovered: {planet.discovered}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Exoplanets = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlanets = examplePlanets.filter(planet =>
    planet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    planet.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    planet.star.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">ExoSearch</h1>
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exoplanets..."
              className="bg-slate-700 shadow-lg rounded-lg placeholder-gray-400 p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition w-full text-lg"
            />
            <Search
              size={24}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPlanets.map((planet, index) => (
            <ExoplanetCard key={index} planet={planet} />
          ))}
        </div>
        
        {filteredPlanets.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            No exoplanets found matching your search criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default Exoplanets;