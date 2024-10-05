import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Exoplanets from "./components/Exoplanets";
import MainPage from "./components/MainPage";
import Forum from "./components/Forum";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/registerPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetails from "@/components/PostDetails.tsx";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/Exoplanets" element={<Exoplanets/>}/>
                <Route path="/Forum" element={<Forum/>}/>
                <Route path="/Forum/Posts/:postId" element={<PostDetails />} />
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/loginPage" element={<LoginPage/>}/>
                <Route path="/registerPage" element={<RegisterPage/>} />
            </Routes>
        </Router>
    );
};

export default App;
