import FlashcardList from "../Components/FlashcardList.jsx";
import React from "react";
import useAuth from "../hooks/useAuth.js";

export default function Home() {
    const { auth} = useAuth();

    return (
        <>
            {
                auth.isAuthenticated &&
                <div className="mt-5 m-4 text-center">
                    <h1 className="font-bold text-4xl">
                        Welcome, {auth.user.name}
                    </h1>
                </div>
            }

            <FlashcardList/>
        </>
    )
}