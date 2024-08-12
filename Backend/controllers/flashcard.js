const flashcardModel = require('../models/flashcard');

const getFlashcards = async (req, res) => {
    try {
        const flashcards = await flashcardModel.getAllFlashcards();
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createFlashcard = async (req, res) => {
    try {
        const newFlashcard = req.body;
        const id = await flashcardModel.addFlashcard(newFlashcard);
        res.status(201).json({ id, ...newFlashcard });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateFlashcard = async (req, res) => {
    const { id } = req.params;
    const updatedFlashcard = req.body;
    try {
        await flashcardModel.updateFlashcard(id, updatedFlashcard);
        res.json({ id, ...updatedFlashcard });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteFlashcard = async (req, res) => {
    const { id } = req.params;
    try {
        await flashcardModel.deleteFlashcard(id);
        res.status(204).json({
            success: true,
            message: "Flashcard deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getFlashcards,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard
};
