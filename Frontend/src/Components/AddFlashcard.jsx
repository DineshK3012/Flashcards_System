import React, { useState } from 'react';
import useFlashcards from '../hooks/useFlashcards.js';

const AddFlashcard = () => {
    const [flashcard, setFlashcard] = useState({ question: '', answer: '', topic: '' });
    const [error, setError] = useState('');
    const {handleAddFlashcard} = useFlashcards();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFlashcard((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error
        setError('');

        // Validate fields
        if (!flashcard.question.trim() || !flashcard.answer.trim() || !flashcard.topic.trim()) {
            setError('All fields are required.');
            return;
        }

        // Call hook to add flashcard to the database
        await handleAddFlashcard(flashcard);

        // Clear the input fields
        setFlashcard({ question: '', answer: '', topic: '' });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Add Flashcard</h2>

            <div className="mb-4">
                <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">
                    Topic
                </label>
                <input
                    id="topic"
                    name="topic"
                    value={flashcard.topic}
                    onChange={handleChange}
                    placeholder="Enter the topic"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-gray-400 outline-none"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="question" className="block text-gray-700 font-medium mb-2">
                    Question
                </label>
                <textarea
                    id="question"
                    name="question"
                    value={flashcard.question}
                    onChange={handleChange}
                    placeholder="Enter the question"
                    className="w-full p-3 border-gray-200 rounded-lg focus:border-gray-400 outline-none focus:ring-0"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="answer" className="block text-gray-700 font-medium mb-2">
                    Answer
                </label>
                <textarea
                    id="answer"
                    name="answer"
                    value={flashcard.answer}
                    onChange={handleChange}
                    placeholder="Enter the answer"
                    className="w-full p-3 border-gray-200 rounded-lg focus:border-gray-400 outline-none focus:ring-0"
                    required
                />
            </div>

            {error && (
                <div className="text-red-500 mb-4">
                    {error}
                </div>
            )}

            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white w-full p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Add Flashcard
            </button>
        </div>
    );
};

export default AddFlashcard;
