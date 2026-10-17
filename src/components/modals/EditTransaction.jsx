import { LuX, LuCheck } from "react-icons/lu"
import Select from "../Select"

const EditTransaction = () => {
    return (
        <div className="backDrop">
            <form className="bg-BODY-BG flex flex-col gap-3 p-3 rounded-md w-100">
                <div className="flex justify-between"> <h3 className="font-bold">Edit Transaction</h3>
                    <button><LuX /></button></div>

                <p className="text-LIGHT-TEXT
                 text-[0.8rem]">Update the details of your transaction</p>
                <div className="flex gap-3">
                    <div className="input-label w-1/2">
                        <label htmlFor="type">Type</label>
                        <Select type="type" />
                    </div>
                    <div className="input-label w-1/2">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" id="amount" name="amount" />
                    </div>
                </div>
                <div className="input-label">
                    <label htmlFor="desc">Description</label>
                    <input type="text" name="desc" id="desc" />
                </div>
                <div className="flex gap-3">
                    <div className="input-label w-1/2">
                        <label htmlFor="category">Category</label>
                        <Select type="category" />
                    </div>

                    <div className="input-label w-1/2">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" />
                    </div>
                </div>
                <div className="input-label">
                    <label htmlFor="notes">Notes</label>
                    <p className="text-[0.8rem] text-LIGHT-TEXT">Optional</p>
                    <textarea type="text" id="notes" name="notes" className="bg-white rounded-md px-2 py-1 text-[0.8rem]" placeholder="Anything else to remember?" rows="3" ></textarea>
                </div>
                <div className="flex gap-2 justify-end mt-3">
                    <button type="button" className="border border-BORDER px-2 rounded-md shadow font-medium">Cancel</button>
                    <button type="submit" className="flex items-center gap-2 bg-NAV-ACTIVE text-white px-3 py-1 rounded-md justify-center font-medium text-[0.9rem]"><LuCheck />Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default EditTransaction