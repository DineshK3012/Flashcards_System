import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import useAuth from './hooks/useAuth';
import {toast} from "react-toastify";

export default function App() {
    const { auth, loadCurrentUser } = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await loadCurrentUser();
            } catch (error) {
                toast.error(error);
            }
        };

        fetchUser();
    }, []);

    return (
        <Router>
                <div className="flex flex-col h-screen">
                    <Header />

                    <Routes>
                        <Route path="/" element={auth.isAuthenticated ? <Home/> : <Register/>}/>
                        <Route path="/dashboard" element={auth.isAuthenticated ? <Dashboard /> : <Navigate to="/register" />} />
                        <Route path="/register" element={auth.isAuthenticated ? <Navigate to="/" /> : <Register />} />
                        <Route path="/login" element={auth.isAuthenticated ? <Navigate to="/" /> : <Login />} />
                    </Routes>

                    <Footer />
                </div>
        </Router>
    );
}
