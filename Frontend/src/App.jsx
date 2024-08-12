import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx";

export default function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>

            <Footer />
        </Router>
    )
}