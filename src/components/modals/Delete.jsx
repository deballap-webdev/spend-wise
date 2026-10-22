import { LuTrash2, LuX } from "react-icons/lu"
const Delete = ({ description, setIsDeleteOpen, deleteFunction, functionParam, headText }) => {
    return (
        <div className="backDrop" onClick={(e) => {
            if (e.target === e.currentTarget) setIsDeleteOpen(false)
        }}>
            <div className="flex flex-col gap-3 bg-BODY-BG rounded-md p-3">
                <div className="flex justify-between">
                    <h3 className="font-bold">Delete {headText}?</h3>
                    <button type="button" onClick={() => setIsDeleteOpen(false)}><LuX /></button>
                </div>
                <p className="text-LIGHT-TEXT text-[0.8rem] -mt-2">{`${description} will be removed from your workspace. This cannot be undone`}</p>

                <div className=" flex gap-2 justify-end">
                    <button className="border border-BORDER rounded-md px-2 py-0.5" onClick={() => setIsDeleteOpen(false)}>Cancel</button>
                    <button className="flex items-center gap-1 bg-red-600 text-white px-2 py-0.5 rounded-md" onClick={() => deleteFunction(functionParam)}><LuTrash2 />Delete Transaction</button>
                </div>
            </div>
        </div>
    )
}

export default Delete