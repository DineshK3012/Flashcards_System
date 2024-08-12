import Flashcard from './Flashcard';
import {useEffect, useState} from "react";
import flashcards from "../../public/flashcards.js"

export default function FlashcardList() {
    const [Flashcards, setFlashcards] = useState(flashcards);
    const[currentFlashcard, setCurrentFlashcard] = useState(0);

    const nextFlashcard = () => {
        setCurrentFlashcard((prevCard) => {
            return (prevCard === Flashcards.length-1) ? 0: prevCard+1;
        });
    }

    const prevFlashcard = () => {
        setCurrentFlashcard((prevCard) => {
            return  (prevCard === 0) ? Flashcards.length - 1: prevCard-1;
        });
    }

    return (
        <>
            <div className="m-5 h-fit overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentFlashcard * 100}%)` }}
                >
                    {
                        Flashcards.map((flashcard, index) => (
                            <Flashcard key={index}  topic={flashcard.topic} question={flashcard.question} answer={flashcard.answer} />
                        ))
                    }
                </div>
                <div className="w-full flex justify-center items-center gap-4 mt-4">
                    <button
                        onClick={prevFlashcard}
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 outline-none transform transition-transform hover:scale-105"
                    >
                        <svg
                            className="w-5 h-5 inline-block mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 19l-7-7 7-7"></path>
                        </svg>
                        Prev
                    </button>
                    <button
                        onClick={nextFlashcard}
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 outline-none transform transition-transform hover:scale-105"
                    >
                        Next
                        <svg
                            className="w-5 h-5 inline-block ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </>
    )
}