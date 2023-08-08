import DeleteButton from "./DeleteButton";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function NewTask({
  task,
  id,
  setAllNotes,
  value,
  onCheckButtonClick,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [check, setCheck] = useState(value === "done");

  const handleButtonCheck = () => {
    setCheck(!check);
    onCheckButtonClick(id);
  };

  return (
    <div id={id} className=" h-12 border border-[#071C3B] m-2 flex flex-nowrap">
      <div
        className={
          check
            ? "bg-[#FEEBC3] w-full text-xl line-through flex justify-between"
            : "bg-white w-full text-xl flex justify-between"
        }
      >
        <span className="p-2">{task}</span>
        <button
          className={
            check
              ? "bg-[#FEEBC3] w-20 px-0 h-full border-l-2 border-[#3F7EA1]"
              : "bg-[#D99951] w-20"
          }
          onClick={handleButtonCheck}
          id={id}
        >
          <AiOutlineCheckCircle className="m-auto text-2xl" />
        </button>
      </div>
      <DeleteButton
        id={id}
        setAllNotes={setAllNotes}
        task={task}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}
