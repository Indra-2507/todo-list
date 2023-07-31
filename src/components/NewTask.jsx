import Buttons from "./Buttons";
import { useState } from "react";

export default function NewTask({
  task,
  id,
  setAllNotes,
  value,
  onCheckButtonClick,
}) {
  const [check, setCheck] = useState(value === "done");

  const handleButtonClick = () => {
    onCheckButtonClick(id);
    setCheck(!check);
  };

  return (
    <div
      key={id}
      className=" h-12 border border-violet-700 m-4 flex flex-nowrap"
    >
      <div
        className={
          check
            ? "bg-gray-300 w-full text-xl p-2 line-through"
            : " bg-white w-full text-xl p-2"
        }
      >
        {task}
      </div>
      <Buttons
        clickButton={handleButtonClick}
        id={id}
        setAllNotes={setAllNotes}
        task={task}
      />
    </div>
  );
}
