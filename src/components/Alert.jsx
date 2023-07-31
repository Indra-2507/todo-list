export default function Alert( {task, isOpen}){

    // if (!isOpen) return null;

    return !isOpen ? <></> : (
        <div 
        className="hidden bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" 
        role="alert">
        <span className="block sm:inline">{task} ha sido eliminada definitivamente.</span>
    </div>
    )

}