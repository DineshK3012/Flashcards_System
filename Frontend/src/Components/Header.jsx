"use client";

import { Button, Navbar } from "flowbite-react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {useRecoilState} from "recoil";
import {authAtom} from "../recoil/authAtom.js";
import useAuth from "../hooks/useAuth.js";

export default function Header() {
    const [auth] = useRecoilState(authAtom);
    const {handleLogout} = useAuth();

    return (
        <Navbar fluid rounded className={`rounded-none border-b-2 z-10`}>
            <Link to="/">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className={`mr-3 h-7 sm:h-9`} alt="Flowbite Logo" />
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
                                    <Button color="purple">Login</Button>
                                </Link>

                                <Link to="/signup" className="mx-2">
                                <Button color="purple">Signup</Button>
                                </Link>
                            </>
                        )
                }
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="text-xl" active>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                {
                    (auth.isAuthenticated && auth.user.isAdmin)  &&
                     <Navbar.Link className="text-xl">
                        <Link to="/dashboard">Dashboard</Link>
                    </Navbar.Link>
                }
                <Navbar.Link className="text-xl">
                    <Link to="/about">About</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
