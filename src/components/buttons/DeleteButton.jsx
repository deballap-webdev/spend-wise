import { LuTrash2 } from "react-icons/lu"

const DeleteButton = ({ setIsDeleteOpen, itemName }) => {
    return (
        <button title={`delete ${itemName}`} onClick={() => setIsDeleteOpen(true)} className="rounded-md hover:bg-LIGHT-RED grid place-content-center p-2 text-red-500 cursor-pointer">
            <LuTrash2 />
        </button>
    )
}

export default DeleteButton