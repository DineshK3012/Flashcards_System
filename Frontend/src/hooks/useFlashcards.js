import { useRecoilState } from 'recoil';
import { flashcardsAtom } from '../recoil/flashcardAtom';
import { getFlashcards, addFlashcard, editFlashcard, deleteFlashcard } from '../api/flashcard';
import { toast } from 'react-toastify';

const useFlashcards = () => {
    const [flashcards, setFlashcards] = useRecoilState(flashcardsAtom);

    const fetchFlashcards = async () => {
        try {
            const { data } = await getFlashcards();
            setFlashcards(data);
            toast.success("Flashcards loaded!");
        } catch (error) {
            toast.error("Failed to load flashcards.");
        }
    };

    const handleAddFlashcard = async (flashcardData) => {
        try {
            await addFlashcard(flashcardData);
            await fetchFlashcards();
            toast.success("Flashcard added!");
        } catch (error) {
            toast.error("Failed to add flashcard.");
        }
    };

    const handleEditFlashcard = async (flashcardId, flashcardData) => {
        try {
            await editFlashcard(flashcardId, flashcardData);
            await fetchFlashcards();
            toast.success("Flashcard updated!");
        } catch (error) {
            toast.error("Failed to update flashcard.");
        }
    };

    const handleDeleteFlashcard = async (flashcardId) => {
        try {
            await deleteFlashcard(flashcardId);
            await fetchFlashcards();
            toast.success("Flashcard deleted!");
        } catch (error) {
            toast.error("Failed to delete flashcard.");
        }
    };

    return { flashcards, fetchFlashcards, handleAddFlashcard, handleEditFlashcard, handleDeleteFlashcard };
};


export default useFlashcards;