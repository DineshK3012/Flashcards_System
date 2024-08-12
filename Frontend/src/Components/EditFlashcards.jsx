import {useState} from "react";
import flashcards from "../../public/flashcards.js";
import EditFlashcard from "./EditFlashcard.jsx";

export default function EditFlashcards() {
    const [Flashcards, setFlashcards] = useState(flashcards);

    function handleDelete(id){
        // setFlashcards((prevflashCard) =>{
        //     return prevflashCard.filter((f) => f.id !== id)
        // })
    }

    function handleSave(flashcard){
        console.log(flashcard);
    }

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