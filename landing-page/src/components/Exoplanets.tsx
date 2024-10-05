import "../App.css";
import * as Icon from 'react-bootstrap-icons';

const Exoplanets = () => {
    return (
        <>
            <div className="bg-slate-800 min-h-screen">
                <div className="flex items-center justify-center w-full h-full px-4">
                    <div className="relative w-full max-w-md mt-12">
                        <input
                            type="text"
                            placeholder="ExoSearch"
                            className="bg-slate-600 shadow rounded placeholder-gray-400  p-2 focus:outline-none focus:shadow-xl text-white transition w-full"
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