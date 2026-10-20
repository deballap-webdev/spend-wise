import { useState } from "react"
import { useStoreState, useStoreActions } from "easy-peasy"
import Select from "../Select"
import { LuCheck, LuX } from "react-icons/lu"
import handleAmount from "../../utils/handleAmount";


const TransactionForm = ({ setIsModalOpen }) => {
    const [amount, setAmount] = useState("")
    const symbol = useStoreState((state) => state.symbol)
    const categoryArray = useStoreState((state) => state.categoryArray)
    const typeArray = useStoreState((state) => state.typeArray)
    const transactions = useStoreState(state => state.transactions)
    const setTransactions = useStoreActions((actions) => actions.setTransactions)
    const [category, setCategory] = useState("food")
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("expense")
    const [note, setNote] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            category,
            description: desc,
            date,
            note,
            type,
            amount,
            id: Date.now(),
        }
        setTransactions([...transactions, newTransaction])
        setIsModalOpen(false)
    }

    return (
        <div className="backDrop" onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false)
        }}>
            <form className='bg-BODY-BG px-4 py-2 rounded-md flex flex-col gap-3 min-w-75 md:w-100 mx-auto' onSubmit={(e) => handleSubmit(e)}>
                <div className="flex justify-between">
                    <h3 className="font-bold text-[1.2rem]">Add Transaction</h3>
                    <button className="text-[0.7rem] hover:cursor-pointer" onClick={() => setIsModalOpen(false)}><LuX /></button>
                </div>
                <div className="flex gap-3">
                    <div className="w-1/2 input-label">
                        <label htmlFor="type" >
                            Type
                        </label>
                        <Select options={typeArray} value={type} setValue={setType} /></div>
                    <div className="w-1/2 input-label">
                        <label htmlFor="amount" >{`Amount (${symbol})`}</label>
                        <input type="text" id="amount" value={amount} inputMode="decimal" onChange={(e) => setAmount(handleAmount(e))} required />
                    </div>
                </div>
                <div className="input-label">
                    <label htmlFor="desc" >Description</label>
                    <input type="text" id="desc" placeholder="What was this transaction for?" value={desc} onChange={(e) => setDesc(e.target.value)} required />
                </div>
                <div className="flex gap-3" >
                    <div className="w-1/2 input-label">
                        <label htmlFor="category" >Category</label>
                        <Select options={categoryArray} value={category} setValue={setCategory} />
                    </div>
                    <div className="w-1/2 input-label">
                        <label htmlFor="date" >Date</label>
                        <input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                </div>
                <div className="w-full input-label">
                    <label htmlFor="notes" >Notes</label>
                    <p className="text-LIGHT-TEXT text-[0.8rem]">Optional</p>
                    <textarea name="notes" id="notes" placeholder="Anything else to remember?" className="bg-CARD-BG px-3 py-2 rounded-md border border-BORDER w-full" rows="4" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                    <div className="flex gap-2 justify-end mt-3">
                        <button type="button" className="border border-BORDER px-2 rounded-md shadow font-medium">Cancel</button>
                        <button type="submit" className="flex items-center gap-2 bg-NAV-ACTIVE text-white px-3 py-1 rounded-md justify-center font-medium text-[0.9rem]"><LuCheck />Add Transaction</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TransactionForm