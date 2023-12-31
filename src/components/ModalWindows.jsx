import { AiOutlineDelete } from "react-icons/ai";

export default function ModalWindows({
  onClose,
  setAllNotes,
  id,
  task,
  isOpen,
}) {
  const handleButtonDelete = () => {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <>
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-75 transition-opacity">
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-[#FEEBC3] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#3F7EA1] sm:mx-0 sm:h-10 sm:w-10">
                        <div
                          className="h-6 w-6  text-center flex justify-center items-center text-xl"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <AiOutlineDelete />
                        </div>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Eliminar
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            ¿Estás seguro de querer eliminar "
                            <span className="modal-text text-[#3F7EA1] font-bold">
                              {task}
                            </span>
                            "? Toda la información será removida de forma
                            permanente. Esta acción no podrá deshacerse.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={handleButtonDelete}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-[#3F7EA1] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#071C3B] sm:ml-3 sm:w-auto"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={onClose}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
