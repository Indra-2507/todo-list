import { useState } from "react";
import NewTask from "./NewTask";
import Form from "./Form";

export default function TaskContainer() {
  const [allNotes, setAllNotes] = useState(() => {
    const tasksLocal = localStorage.getItem("task");
    return tasksLocal ? JSON.parse(tasksLocal) : [];
  });

  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleCheckButtonClick = (taskId) => {
    setAllNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === taskId
          ? { ...note, value: note.value === "toDo" ? "done" : "toDo" }
          : note
      )
    );
  };

  const filteredElements = allNotes.filter((note) => {
    if (selectedFilter === "all") {
      return true;
    } else {
      return note.value === selectedFilter;
    }
  });

  const tasksLocal = JSON.stringify(allNotes);
  localStorage.setItem("task", tasksLocal);

  return (
    <section 
    className="flex flex-col grow">
      <Form 
      setAllNotes={setAllNotes}
      setSelectedFilter={setSelectedFilter}
      />
      {filteredElements.map((note) => {
        return (
          <NewTask
            key={note.id}
            task={note.text}
            id={note.id}
            value={note.value}
            setAllNotes={setAllNotes}
            onCheckButtonClick={handleCheckButtonClick}
          />
        );
      })}
    </section>
  );
}
