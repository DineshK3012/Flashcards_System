import React, { useState } from 'react';

const EditFlashcard = ({ flashcard, onDelete, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableFlashcard, setEditableFlashcard] = useState(flashcard);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onSave(editableFlashcard);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setEditableFlashcard(flashcard); // Reset to original flashcard data
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableFlashcard((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-w-[250px] max-w-[400px] bg-white shadow-md rounded-lg p-6 mb-4">
            {isEditing ? (
                <div>
                    <div className="mb-4">
                        <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">
                            Topic
                        </label>
                        <input
                            id="topic"
                            name="topic"
                            value={editableFlashcard.topic}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="question" className="block text-gray-700 font-medium mb-2">
                            Question
                        </label>
                        <textarea
                            id="question"
                            name="question"
                            value={editableFlashcard.question}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="answer" className="block text-gray-700 font-medium mb-2">
                            Answer
                        </label>
                        <textarea
                            id="answer"
                            name="answer"
                            value={editableFlashcard.answer}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <button
                        onClick={handleSaveClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleCancelClick}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="text-lg font-semibold">{flashcard.topic}</h3>
                    <h4 className="text-md font-semibold">{flashcard.question}</h4>
                    <p className="text-gray-700">{flashcard.answer}</p>
                    <div className="mt-4">
                        <button
                            onClick={handleEditClick}
                            className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(flashcard.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditFlashcard;
