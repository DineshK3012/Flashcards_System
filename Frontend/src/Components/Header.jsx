"use client";
import {useState} from "react";
import { Button, Navbar } from "flowbite-react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {useRecoilState} from "recoil";
import {authAtom} from "../recoil/authAtom.js";
import useAuth from "../hooks/useAuth.js";

export default function Header() {
    const [auth] = useRecoilState(authAtom);
    const {handleLogout} = useAuth();

    const [selectedTab, setSelectedTab] = useState(window.location.pathname);

    const setTab = (path) => {
        setSelectedTab(path);
    }

    return (
        <Navbar fluid rounded className={`rounded-none border-b-2 z-10`}>
            <Link to="/">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className={`mr-3 h-8 sm:h-10`} alt="Flowbite Logo" />
                    <span
                        className="self-center whitespace-nowrap text-2xl font-bold dark:text-white text-purple-800"></span>
                </Navbar.Brand>
            </Link>
            <div className="flex md:order-2">
                {
                    auth.isAuthenticated ? (
                        <Button color="purple" onClick={handleLogout}>Logout</Button>
                        ) :(
                            <>
                                <Link to="/login" className="mx-2">
                                    <button className="bg-blue-500 text-white w-full max-sm:px-3 max-sm:text-sm py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
                                </Link>

                                <Link to="/register" className="mx-2">
                                    <button
                                        className="bg-blue-500 text-white w-full max-sm:px-3 max-sm:text-sm  py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Register
                                    </button>
                                </Link>
                            </>
                    )
                }
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link className={`text-xl hover:font-bold ${selectedTab === '/d' && "font-bold"}`}>
                    <Link to="/" onClick={() => setTab("/")}>Home</Link>
                </Navbar.Link>
                {
                    (auth.isAuthenticated && auth.user.isAdmin)  &&
                    <Navbar.Link className={`text-xl hover:font-bold ${selectedTab === '/dashboard' && "font-bold"}`}>
                        <Link to="/dashboard"  onClick={() => setTab("/dashboard")}>Dashboard</Link>
                    </Navbar.Link>
                }
            </Navbar.Collapse>
        </Navbar>
    );
}
