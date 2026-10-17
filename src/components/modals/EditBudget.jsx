import { LuCheck } from "react-icons/lu"
import Select from "../Select"

const EditBudget = () => {
    return (
        <div className="backDrop">
            <form className="bg-BODY-BG flex flex-col gap-3 p-3 rounded-md">
                <h3 className="font-bold">Edit Budget</h3>
                <p className="text-[0.8rem] text-LIGHT-TEXT">Update your monthly spending limit</p>
                <div className="input-label">
                    <label htmlFor="category">Category</label>
                    <Select type="category" />
                </div>
                <div className="flex gap-3">
                    <div className="input-label">
                        <label htmlFor="limit">Monthlt Limit</label>
                        <input type="text" name="limit" id="limit" />
                    </div>
                    <div className="input-label">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <button className="border px-2 py-0.5 rounded-md border-BORDER shadow" >Cancel</button>
                    <button className="flex items-center bg-NAV-ACTIVE text-white rounded-md px-2 py-1 gap-1"><LuCheck /> Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default EditBudget