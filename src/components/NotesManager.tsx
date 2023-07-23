import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/20/solid';

const NotesManager = () => {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    const handleNoteChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setNote(e.target.value);
    };

    const handleAddNote: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (note.trim() !== '') {
            setNotes([...notes, note]);
            setNote('');
        }
    };

    const handleDeleteNote = (index: number) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div className='p-4'>
            <div className='mb-4'>
                <input
                    type='text'
                    className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 text-black'
                    placeholder='Enter a new note...'
                    value={note}
                    onChange={handleNoteChange}
                />
                <button
                    type='button'
                    className='ml-2 px-4 py-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
                    onClick={handleAddNote}
                >
                    Add Note
                </button>
            </div>

            {notes.length > 0 ? (
                <ul className='bg-white rounded shadow-lg'>
                    {notes.map((note, index) => (
                        <li
                            key={index}
                            className='flex items-center justify-between p-4 border-b border-gray-300'
                        >
                            <span className='text-red-500/80'>{note}</span>
                            <button
                                type='button'
                                className='text-red-500 hover:text-red-600 focus:outline-none focus:ring'
                                onClick={() => handleDeleteNote(index)}
                            >
                                <TrashIcon className='w-5 h-5' />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='text-gray-600'>No notes added yet.</p>
            )}
        </div>
    );
};

export default NotesManager;
