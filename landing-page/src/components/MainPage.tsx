import "../App.css";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import exoplanet from "../assets/exoplanet.png";
import aboutUs from "../assets/LogoofPPM.png";

const MainPage = () => {
    return (
        <div className="bg-gradient-to-t from-slate-900 to-gray-800 min-h-screen">
            <div className="w-full h-full flex flex-col items-center justify-center container mx-auto p-4 md:p-8 space-y-16">
                
                {/* First Section - Explore Exoplanets */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full shadow-lg bg-slate-700 rounded-lg p-6">
                    <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start px-4">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug text-center ml-16">
                            Odkrywaj Nowe Światy!
                        </span>
                        <p className="text-gray-300 text-sm sm:text-md md:text-lg mt-4 leading-relaxed  text-center ">
                            Przeglądaj tysiące planet krążących wokół innych gwiazd,
                            odkrywaj fascynujące światy i dowiedz się,<br/>
                            jak mogą wyglądać egzoplanety poza naszym Układem Słonecznym.
                        </p>
                        <Link to="/Exoplanets"
                              className="text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out shadow-lg p-2 md:p-3 rounded inline-flex items-center mt-4 md:mt-6">
                            Poznaj egzoplanety
                            <Icon.ArrowRight size={20} color="white" className="ml-2"/>
                        </Link>
                    </div>
                    <div className="flex justify-center md:w-1/2 mt-8 md:mt-0">
                        <img src={exoplanet} alt="egzoplaneta" className="w-40 sm:w-48 md:w-64 rounded "/>
                    </div>
                </div>

                {/* Second Section - About Us */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full shadow-lg bg-slate-700 rounded-lg p-6">
                    <div className="flex justify-center md:w-1/2 mt-8 md:mt-0">
                        <img src={aboutUs} alt="aboutUs" className="w-40 sm:w-48 md:w-64 rounded "/>
                    </div>
                    <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start px-4">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug ml-18">
                            Prawy Przycisk Myszy
                        </span>
                        <p className="text-gray-300 text-sm sm:text-md md:text-lg mt-4 leading-relaxed text-center">
                            Cześć, jesteśmy grupą pasjonatów technologii.<br/>
                            Naszym celem jest stworzenie innowacyjnej strony internetowej poświęconej egzoplanetom.<br/>
                            Chcemy zainspirować ludzi do odkrywania tajemnic wszechświata oraz dzielenia się najnowszymi odkryciami naukowymi.
                        </p>
                        <Link to="/AboutUs"
                              className="text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition duration-300 ease-in-out shadow-lg p-2 md:p-3 rounded inline-flex items-center mt-4 md:mt-6">
                            Poznaj nasz team
                            <Icon.ArrowRight size={20} color="white" className="ml-2"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainPage;