
export default function ModalWindows (){

        <div  id="modal-window" class="hidden relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-75 transition-opacity">
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <div class="h-6 w-6 text-red-600 text-center" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <i class="fa-solid fa-trash text-red-600"></i>
                                        </div>
                                    </div>
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Eliminar</h3>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500">¿Estás seguro de querer eliminar "<span class="modal-text text-red-600 font-bold"></span>"? Toda la información será removida de forma permanente. Esta acción no podrá deshacerse.</p>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button id="modal-delete" type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Eliminar</button>
                                <button id="modal-cancel" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancelar</button>
                            </div> 
                        </div>
                    </div>  
                </div>
            </div>
        </div>
}