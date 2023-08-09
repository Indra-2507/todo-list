import { useState } from "react";
import Select from "./Select";
import { AiOutlineSend } from "react-icons/ai";
export default function Form({ setSelectedFilter, setAllNotes }) {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      const newTask = {
        id: crypto.randomUUID(),
        text: task.trim(),
        value: "toDo",
      };

      setAllNotes((prevNotes) => [...prevNotes, newTask]);
      setTask("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-around flex-wrap sm:flex-nowrap">
        <div className="border-2 border-[#3F7EA1] bg-white w-full m-2">
          <label
            className="py-full flex flex-wrap text-xs px-2"
            htmlFor="tarea"
          >
            Tarea
          </label>
          <input
            onChange={handleChange}
            className="w-full px-2"
            type="text"
            name="tarea"
            value={task}
            placeholder="Ingrese su tarea"
            aria-label="Tarea"
          />
        </div>
        <Select setSelectedFilter={setSelectedFilter} />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#071C3B] text-white rounded-lg w-1/5 m-4 p-2 flex justify-center items-center gap-2"
        >
          Enviar
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
}
