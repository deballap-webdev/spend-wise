import { useState } from "react"
import { LuX, LuCheck } from "react-icons/lu"
import Select from "../Select"
import { useStoreActions, useStoreState } from "easy-peasy"

const EditTransaction = ({ transaction, setIsEditOpen }) => {
    const [editType, setEditType] = useState(transaction.type)
    const [editDesc, setEditDesc] = useState(transaction.description)
    const [editCategory, setEditCategory] = useState(transaction.category)
    const [editNote, setEditNote] = useState(transaction.note)
    const [editAmount, setEditAmount] = useState(transaction.amount)
    const [editDate, setEditDate] = useState(transaction.date)
    const categoryArray = useStoreState((state) => state.categoryArray)
    const typeArray = useStoreState((state) => state.typeArray)
    const transactions = useStoreState((state) => state.transactions)

    const setTransactions = useStoreActions((actions) => actions.setTransactions)

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedTransaction = {
            note: editNote,
            type: editType,
            description: editDesc,
            category: editCategory,
            amount: editAmount,
            date: editDate,
            id: transaction.id
        }
        setTransactions(transactions.map((trans => trans.id === transaction.id ? updatedTransaction : trans)))
        setIsEditOpen(false)
    }

    return (
        <div className="backDrop" onClick={(e) => {
            if (e.target === e.currentTarget) setIsEditOpen(false)
        }}>
            <form className="bg-BODY-BG flex flex-col gap-3 p-3 rounded-md w-100" onSubmit={(e) => handleSubmit(e)}>
                <div className="flex justify-between"> <h3 className="font-bold">Edit Transaction</h3>
                    <button type="button" onClick={() => setIsEditOpen(false)}><LuX /></button></div>
                <p className="text-LIGHT-TEXT
                 text-[0.8rem]">Update the details of your transaction</p>
                <div className="flex gap-3">
                    <div className="input-label w-1/2">
                        <label htmlFor="type">Type</label>
                        <Select options={typeArray} value={editType} setValue={setEditType} />
                    </div>
                    <div className="input-label w-1/2">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" id="amount" name="amount" value={editAmount} onChange={(e) => setEditAmount(e.target.value)} />
                    </div>
                </div>
                <div className="input-label">
                    <label htmlFor="desc">Description</label>
                    <input type="text" name="desc" id="desc" required value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                </div>
                <div className="flex gap-3">
                    <div className="input-label w-1/2">
                        <label htmlFor="category">Category</label>
                        <Select options={categoryArray} value={editCategory} setValue={setEditCategory} />
                    </div>

                    <div className="input-label w-1/2">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                    </div>
                </div>
                <div className="input-label">
                    <label htmlFor="notes">Notes</label>
                    <p className="text-[0.8rem] text-LIGHT-TEXT">Optional</p>
                    <textarea type="text" id="notes" name="notes" className="bg-white rounded-md px-2 py-1 text-[0.8rem]" placeholder="Anything else to remember?" rows="3" value={editNote} onChange={(e) => setEditNote(e.target.value)} ></textarea>
                </div>
                <div className="flex gap-2 justify-end mt-3">
                    <button type="button" className="border border-BORDER px-2 rounded-md shadow font-medium" onClick={() => setIsEditOpen(false)}>Cancel</button>
                    <button type="submit" className="flex items-center gap-2 bg-NAV-ACTIVE text-white px-3 py-1 rounded-md justify-center font-medium text-[0.9rem]"><LuCheck />Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default EditTransaction