import React from "react";
import "../App.css";
import Navbar from "./Navbar.tsx";
import * as Icon from 'react-bootstrap-icons';

const Exoplanets = () => {
    return (
        <>
            <div className="flex items-center justify-center container mx-auto">
                <div className="flex items-center justify-center container mx-auto">
                    <div className="relative w-1/2 mt-12">
                        <input
                            type="text"
                            placeholder="ExoSearch"
                            className="bg-gray-200 shadow placeholder-gray-400 text-black p-2 focus:outline-none focus:shadow-md transition w-full pr-10"
                        />
                        <Icon.Keyboard
                            size={20}
                            color="gray"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Exoplanets;