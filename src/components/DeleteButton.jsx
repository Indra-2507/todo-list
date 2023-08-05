import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import ModalWindows from "./ModalWindows";

export default function DeleteButton({ setAllNotes, id, task }) {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleButtonDelete = () => {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <>
      <button className="bg-red-300 w-20" 
      onClick={handleOpenModal}>
        <AiOutlineDelete 
        className="m-auto text-2xl" />
      </button>
      <ModalWindows
        task={task}
        id={id}
        setAllNotes={setAllNotes}
        isOpen={openModal}
        onClose={handleCloseModal}
      />
    </>
  );
}
