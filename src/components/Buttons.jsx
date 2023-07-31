import { useState } from "react";
import { AiOutlineDelete, AiOutlineCheckCircle } from "react-icons/ai";
import ModalWindows from "./ModalWindows";

export default function Buttons({ clickButton, setAllNotes, id, task }) {
  const [check, setCheck] = useState(() => {
    const storedCheck = localStorage.getItem(`buttonCheck_${id}`);
    return storedCheck === "true";
  });

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleButtonCheck = () => {
    setCheck(!check);
    clickButton(id);
  };

  localStorage.setItem(`buttonCheck_${id}`, check.toString());

  return (
    <>
      <button
        className={check ? "bg-gray-400 w-20" : "bg-green-300 w-20"}
        onClick={handleButtonCheck}
      >
        {task.value}
        <AiOutlineCheckCircle className="m-auto text-2xl" />
      </button>
      <button className="bg-red-300 w-20" onClick={handleOpenModal}>
        <AiOutlineDelete className="m-auto text-2xl" />
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
