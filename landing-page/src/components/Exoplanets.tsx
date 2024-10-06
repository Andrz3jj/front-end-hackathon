import { useState } from 'react';
import "../App.css";
import { Search, X } from 'lucide-react';

const examplePlanets = [
  {
    name: "Kepler-186f",
    distance: "582 lata świetlne",
    type: "Super Ziemia",
    temperature: "188K",
    discovered: "2014",
    star: "Kepler-186"
  },
  {
    name: "TRAPPIST-1e",
    distance: "39 lata świetlne",
    type: "Skalista, przypominająca Ziemię",
    temperature: "251K",
    discovered: "2017",
    star: "TRAPPIST-1"
  },
  {
    name: "Proxima Centauri b",
    distance: "4.2 lata świetlne",
    type: "Super Ziemia",
    temperature: "234K",
    discovered: "2016",
    star: "Proxima Centauri"
  }
];

const CustomButton = ({ onClick, className, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
);

const ExoplanetCard = ({ planet, onSelect, isSelected, comparing }) => (
    <div className={`bg-slate-700 border ${isSelected ? 'border-blue-500' : 'border-slate-600'} rounded hover:bg-slate-600 transition-colors duration-200 relative`}>
      <div className="p-6">
        {comparing && (
            <CustomButton
                onClick={() => onSelect(planet)}
                className={`absolute top-2 right-2 ${isSelected ? 'bg-blue-500' : 'bg-slate-600'}`}
            >
              {isSelected ? 'Selected' : 'Compare'}
            </CustomButton>
        )}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl text-white mb-2"><span className="font-bold">Nazwa egzoplanety:</span> {planet.name}</h3>
            <div className="flex items-center text-gray-300 text-sm mb-1">
              <div className="w-4 h-4 mr-2" />
              <span>{planet.star}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm mb-1">
              <div className="w-4 h-4 mr-2" />
              <span><span className="font-bold">Typ: </span>{planet.type}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm mb-1">
              <div className="w-4 h-4 mr-2" />
              <span><span className="font-bold">Temperatura:</span> {planet.temperature}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm mb-1">
              <div className="w-4 h-4 mr-2" />
              <span><span className="font-bold">Dystans od ziemi:</span> {planet.distance}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-4 h-4 mr-2" />
              <span><span className="font-bold">Kiedy odkryto:</span> {planet.discovered}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
);

const ComparisonView = ({ planets, onClose }) => (
    <div className="bg-slate-700 p-6 rounded-lg mb-8 relative">
      <CustomButton
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-600 hover:bg-slate-500"
      >
        <X className="h-4 w-4" />
      </CustomButton>
      <h2 className= " text-2xl font-bold text-white mb-6">Porównanie planet</h2>
     <button className="bg-amber-400 rounded text-white mb-4">Zobacz Porównanie w 3D - Vip Onlys</button>
      <div className="grid grid-cols-2 gap-8">
        {planets.map((planet, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-white">{planet.name}</h3>
              <div className="space-y-2">
                <p className="text-gray-300"><span className="font-bold">Gwiazda:</span> {planet.star}</p>
                <p className="text-gray-300"><span className="font-bold">Typ:</span> {planet.type}</p>
                <p className="text-gray-300"><span className="font-bold">Temperatura:</span> {planet.temperature}</p>
                <p className="text-gray-300"><span className="font-bold">Dystans:</span> {planet.distance}</p>
                <p className="text-gray-300"><span className="font-bold">Odkryto:</span> {planet.discovered}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
);

const Exoplanets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [comparing, setComparing] = useState(false);
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const filteredPlanets = examplePlanets.filter(planet =>
      planet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      planet.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      planet.star.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlanetSelect = (planet) => {
    if (selectedPlanets.find(p => p.name === planet.name)) {
      setSelectedPlanets(selectedPlanets.filter(p => p.name !== planet.name));
    } else if (selectedPlanets.length < 2) {
      setSelectedPlanets([...selectedPlanets, planet]); // Fixed array spread operator
    }
  };

  const startComparing = () => {
    setComparing(true);
    setSelectedPlanets([]);
  };

  const stopComparing = () => {
    setComparing(false);
    setSelectedPlanets([]);
  };

  return (
      <div className="bg-slate-800 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">ExoSearch</h1>

          <div className="flex justify-center mb-8">
            <CustomButton
                onClick={comparing ? stopComparing : startComparing}
                className={`${comparing ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {comparing ? 'Cancel Comparison' : 'Compare Planets'}
            </CustomButton>
          </div>

          {selectedPlanets.length === 2 && (
              <ComparisonView
                  planets={selectedPlanets}
                  onClose={() => setSelectedPlanets([])}
              />
          )}

          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Wyszukaj egzoplanety..."
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
                <ExoplanetCard
                    key={index}
                    planet={planet}
                    comparing={comparing}
                    isSelected={selectedPlanets.some(p => p.name === planet.name)}
                    onSelect={handlePlanetSelect}
                />
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