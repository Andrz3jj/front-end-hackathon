import { Link } from "react-router-dom";
import "../App.css";

const LoginPage = () => {
  return (
    <>
      <div className="bg-slate-800 text-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-slate-700 p-8 rounded shadow border border-slate-600 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Zaloguj się
            </h1>
            <form>
              <label className="block text-sm sm:text-base md:text-lg mb-2">
                Twój email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <label className="block mt-4 text-sm sm:text-base md:text-lg mb-2">
                Twoje hasło
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <div className="flex justify-center mt-4 text-center w-full text-sm md:text-base">
                Nie masz konta? Załóż je
                <Link
                  className="text-blue-600 ml-1 hover:text-blue-700 transition"
                  to="/registerPage"
                >
                  tutaj!
                </Link>
              </div>

              <button
                type="submit"
                className="mt-4 bg-blue-600 rounded p-4 w-full hover:bg-blue-700 transition focus:bg-blue-800"
              >
                <Link className="text-2xl font-semibold" to="/WelcomePage">
                  Zaloguj Się
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
