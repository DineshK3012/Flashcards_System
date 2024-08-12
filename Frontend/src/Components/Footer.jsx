"use client";

import { Footer } from "flowbite-react";
import {Link} from "react-router-dom"

export default function FooterComponent() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <Footer container className={`mt-auto rounded-none`}>
            <div className="w-full text-center">
                <Link to="/">
                    <Footer.Copyright by="Flashcard System™" year={year} />
                </Link>
            </div>
        </Footer>
    );
}
