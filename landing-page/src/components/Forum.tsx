import "../App.css";
import RecentPostComponent from "./RecentPostComponent.tsx";
import React from "react";

const Forum: React.FC = () => {
        return (
            <>
                <div>
                    <div className="bg-slate-800 h-screen text-white">
                        <div className="container md:mx-auto" >
                            <div className="text-center p-12 flex justify-center">
                                <span className="text-6xl  font-mono">AskExo</span>
                                <div className="relative flex items-center">
                                    <input type="text"
                                           className="w-full transition-all outline-none border-b border-b-slate-600 p-2 pr-10 text-purple-300 bg-transparent focus:border-b-purple-500 hover:border-b-purple-700"/>
                                    <button className="p-3 rounded-full hover:text-purple-700 hover:text-lg transition-all cursor-pointer focus:text-purple-300 right-10 top-1/2 transform -translate-y-1/2">
                                        <i className="bi bi-search absolute"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="md:basis-1/3 p-5 m-5 rounded-2xl bg-slate-900 font-mono sticky      ">
                                    <span className="text-  3xl font-bold tracking-widest text-center w-full">Recent Questions</span>
                                    <RecentPostComponent/>
                                </div>
                                <div className="md:basis-2/3 p-5 m-5 rounded-2xl bg-slate-900 font-mono">

                                </div>
                                <div className="md:basis-2/3 p-5 m-5 rounded-2xl bg-slate-900 font-mono">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
};

export default Forum;