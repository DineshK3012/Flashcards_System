const connectDatabase = require('../config/db');

const getAllFlashcards = async () => {
    const pool = await connectDatabase();
    const [rows] = await pool.query('SELECT * FROM flashcards');
    return rows;
};

const addFlashcard = async (flashcard) => {
    const pool = await connectDatabase();

    const [result] = await pool.query(
        'INSERT INTO flashcards (topic, question, answer) VALUES (?, ?, ?)',
        [flashcard.topic, flashcard.question, flashcard.answer]
    );
    return result.insertId;
};

const updateFlashcard = async (id, flashcard) => {
    const pool = await connectDatabase();
    await pool.query(
        'UPDATE flashcards SET topic = ?, question = ?, answer = ? WHERE id = ?',
        [flashcard.topic, flashcard.question, flashcard.answer, id]
    );
};

const deleteFlashcard = async (id) => {
    const pool = await connectDatabase();
    await pool.query('DELETE FROM flashcards WHERE id = ?', [id]);
};

module.exports = {
    getAllFlashcards,
    addFlashcard,
    updateFlashcard,
    deleteFlashcard
};
