import {useEffect, useState} from "react";
import flashcards from "../../public/flashcards.js";
import EditFlashcard from "./EditFlashcard.jsx";
import useFlashcards from "../hooks/useFlashcards.js";
import {useRecoilState} from "recoil";
import {flashcardsAtom} from "../recoil/flashcardAtom.js";

export default function EditFlashcards() {
    const [Flashcards, setFlashcards] = useRecoilState(flashcardsAtom)
    const { handleEditFlashcard, handleDeleteFlashcard, fetchFlashcards} = useFlashcards();

    const handleDelete = async (id)=> {
        await handleDeleteFlashcard(id);
    }

    const handleSave= async (flashcard)=>{
        await handleEditFlashcard(flashcard.id, flashcard);
    }

    useEffect(() => {
        fetchFlashcards();
    }, []);

    return (
        <>
            <div className={`flex flex-wrap gap-4`}>
                {
                    Flashcards.map((flashcard, index)=>{
                        return <EditFlashcard key={index} flashcard={flashcard} onSave={handleSave} onDelete={handleDelete}/>
                    })
                }
            </div>
        </>
    )
}