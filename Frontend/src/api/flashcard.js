import axios from 'axios';
const base_url = import.meta.env.VITE_BASE_URL;

export const getFlashcards = async () => {
    return await axios.get(`${base_url}/api/flashcards`,{
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        }
    });
};

export const addFlashcard = async (flashcardData) => {
    return await axios.post(`${base_url}/api/flashcards`, flashcardData,{
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        }
    });
};

export const editFlashcard = async (flashcardId, flashcardData) => {
    return await axios.put(`${base_url}/api/flashcards/${flashcardId}`, flashcardData, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        }
    });
};

export const deleteFlashcard = async (flashcardId) => {
    return await axios.delete(`${base_url}/api/flashcards/${flashcardId}`, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        }
    });
};
