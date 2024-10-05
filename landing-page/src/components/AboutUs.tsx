import "../App.css";
import Andrzej from "../assets/profileImg/Andrzej.png";
import Janek from "../assets/profileImg/Janek.png";
import Tomek from "../assets/profileImg/Tomek.png";
import Kamil from "../assets/profileImg/Kamil.png";
import Kacper from "../assets/profileImg/Kacper.png";
import githubLogo from "../assets/githubLogo.svg";

const AboutUs = () => {
    return (
        <>
            <div className="bg-slate-800 text-white min-h-screen">
               <div className="flex items-center justify-center h-full p-4 md:p-16 container">
                    <div className="text-lg text-center">
                        <div>
                            <span className="font-bold">Prawy Przycisk Myszy</span> to zespół kreatywnych i pasjonatów technologii programistów, 
                            którzy postanowili połączyć swoje umiejętności, 
                            by stworzyć innowacyjną stronę edukacyjną o egzoplanetach. 
                            Naszym celem jest zbliżenie użytkowników do fascynującego świata 
                            planet znajdujących się poza Układem Słonecznym, 
                            w sposób przystępny zarówno dla laików, jak i dla pasjonatów astronomii.
                        </div>
                        <div className="text-lg text-center pt-8 md:pt-16">
                            Nasz zespół składa się z programistów z różnych dziedzin, w tym:<br/><br/>
                            <ul>
                                <li>Front-end developers:<br/><br/>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                                    <div className="bg-slate-700 border border-slate-600 rounded flex items-center">
                                        <img src={Andrzej} className="w-20 md:w-28 m-4 rounded-lg" />
                                        <div className="ml-4 text-white flex flex-col items-center"> 
                                             <span className="text-center">Andrzej Bajcarczyk</span> 
                                            <a href="https://github.com/Andrz3jj" 
                                            className="flex items-center justify-center bg-white text-black rounded mt-2 hover:bg-gray-200 transition px-2 py-1 w-24">
                                                <img src={githubLogo} alt="Github logo" className="w-5 h-5 mr-2" />
                                                Github
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-slate-700 border border-slate-600 rounded flex items-center"> 
                                        <img src={Janek} className="w-20 md:w-28 m-4 rounded-lg" />
                                        <div className="ml-4 text-white flex flex-col items-center"> 
                                            <span className="text-center">Jan Florek</span> 
                                            <a href="https://github.com/WavyWare" 
                                            className="flex items-center justify-center bg-white text-black rounded mt-2 hover:bg-gray-200 transition px-2 py-1 w-24">
                                                <img src={githubLogo} alt="Github logo" className="w-5 h-5 mr-2" />
                                                Github
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-slate-700 border border-slate-600 rounded flex items-center">
                                        <img src={Tomek} className="w-20 md:w-28 m-4 rounded-lg" />
                                        <div className="ml-4 text-white flex flex-col items-center"> 
                                            <span className="text-center">Tomasz Tłusty</span> 
                                            <a href="https://github.com/FarciarzYT" 
                                            className="flex items-center justify-center bg-white text-black rounded mt-2 hover:bg-gray-200 transition px-2 py-1 w-24">
                                                <img src={githubLogo} alt="Github logo" className="w-5 h-5 mr-2" />
                                                Github
                                            </a>
                                        </div>
                                    </div>

                                </div>

                                </li><br/>
                                <li>Back-end developers:</li><br/>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-slate-700 border border-slate-600 rounded flex items-center w-80 max-w-md mx-auto">
                                        <img src={Kamil} className="w-20 md:w-28 m-4 rounded-lg" />
                                        <div className="ml-4 text-white flex flex-col items-center">
                                            <span className="text-center">Kamil Konieczny</span>
                                            <a href="https://github.com/kamelkali" 
                                                className="flex items-center justify-center bg-white text-black rounded mt-2 hover:bg-gray-200 transition px-2 py-1">
                                                <img src={githubLogo} alt="Github logo" className="w-5 h-5 mr-2" />
                                                Github
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-slate-700 border border-slate-600 rounded flex items-center w-80 w-72 mx-auto">
                                        <img src={Kacper} className="w-20 md:w-28 m-4 rounded-lg" />
                                        <div className="ml-4 text-white flex flex-col items-center">
                                            <span className="text-center">Kacper Zbyrad</span>
                                            <a href="https://github.com/KacZbyDev" 
                                                className="flex items-center justify-center bg-white text-black rounded mt-2 hover:bg-gray-200 transition px-2 py-1">
                                                <img src={githubLogo} alt="Github logo" className="w-5 h-5 mr-2" />
                                                Github  
                                            </a>
                                        </div>
                                    </div>

                                    </div>
                            </ul>
                        </div>    
                    </div>
                    
               </div>
            </div>
        </>
    );
};

export default AboutUs;
