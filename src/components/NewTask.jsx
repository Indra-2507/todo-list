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
    <div
      id={id}
      className=" h-12 border border-[#071C3B] m-2 flex flex-nowrap box-border h-auto"
    >
      <div
        className={
          check
            ? "bg-[#cccccc] w-full text-xl line-through flex justify-between"
            : "bg-white w-full text-xl flex justify-between"
        }
      >
        <p className="p-2">{task}</p>
        <button
          className={
            check
              ? "bg-[#cccccc] min-w-[80px] px-0 h-full border-l-2 border-[#D99951]"
              : "bg-[#D99951] min-w-[80px] "
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
