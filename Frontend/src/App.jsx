import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>

                <Footer/>
            </div>
        </Router>
)
}