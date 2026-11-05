import { LuPencil } from "react-icons/lu"

const EditButton = ({ editFunction, itemName }) => {
    return (
        <button title={`edit ${itemName}`} className="hover:bg-LIGHT-GREEN items-center justify-end rounded-md p-2 flex cursor-pointer" onClick={() => editFunction()}><LuPencil /></button>
    )
}

export default EditButton