import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

export default function DeleteButton({ setAllNotes, id }) {
  const handleButtonDelete = () => {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <button className='bg-red-300 w-20' 
    onClick={handleButtonDelete}>
      <AiOutlineDelete className='m-auto text-2xl' />
    </button>
  );
}