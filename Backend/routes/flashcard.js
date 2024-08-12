const router = require('express').Router();
const {getFlashcards, createFlashcard, updateFlashcard, deleteFlashcard} = require("../controllers/flashcard");

router.get('/', getFlashcards);
router.post('/', createFlashcard);
router.put('/:id', updateFlashcard);
router.delete('/:id', deleteFlashcard);

module.exports = router;