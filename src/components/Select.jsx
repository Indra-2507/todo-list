export default function Select({ setSelectedFilter }) {
  const handleFiltroChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <>
      <div className="border-2 border-[#3F7EA1] bg-white w-full m-2">
        <label
          className="py-full flex flex-wrap text-xs px-2"
          htmlFor="seleccionar"
        >
          Seleccionar
        </label>
        <select className="w-full px-2" onChange={handleFiltroChange}>
          <option value="all">Todas</option>
          <option name="done" value="done">
            Completas
          </option>
          <option name="toDo" value="toDo">
            Incompletas
          </option>
        </select>
      </div>
    </>
  );
}
