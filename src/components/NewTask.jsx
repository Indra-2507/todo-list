import Buttons from "./DeleteButton";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
export default function NewTask({
  task,
  id,
  setAllNotes,
  value,
  onCheckButtonClick,
}) {
  const [check, setCheck] = useState(value === "done");

  const handleButtonCheck = () => {
    setCheck(!check);
    onCheckButtonClick(id);
  };

  return (
    <div
      id={id}
      className=" h-12 border border-violet-700 m-4 flex flex-nowrap"
    >
      <div
        className={
          check
            ? "bg-gray-300 w-full text-xl line-through flex justify-between"
            : "bg-white w-full text-xl flex justify-between"
        }
      >
        <span className="p-2"> 
        {task}
        </span>
        <button
        className={
          check ? "bg-gray-400 w-20 px-0 h-full" : "bg-green-300 w-20"}
        onClick={handleButtonCheck}
        id={id}
      >
        <AiOutlineCheckCircle className="m-auto text-2xl" />
      </button>
      </div>
      <Buttons
        id={id}
        setAllNotes={setAllNotes}
        task={task}
      />
    </div>
  );
}
