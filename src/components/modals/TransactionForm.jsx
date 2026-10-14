import { useState } from "react"
import { useStoreState } from "easy-peasy"
import Select from "../Select"
import { LuCheck, LuX } from "react-icons/lu"

const TransactionForm = () => {
    const [amount, setAmount] = useState("")
    const symbol = useStoreState((state) => state.symbol)
    const handleAmount = (e) => {
        const regex = /[^0-9.]/g
        let value = e.target.value.replace(regex, "")
        const parts = value.split(".")
        if (parts.length > 2) {
            value = parts[0] + "." + parts.slice(1).join("")
        }
        setAmount(value)
    }

    return (
        <div className="backDrop">
            <form className='bg-BODY-BG px-4 py-2 rounded-md flex flex-col gap-3 min-w-75 md:w-100 mx-auto'>
                <div className="flex justify-between">
                    <h3 className="font-bold text-[1.2rem]">Add Transaction</h3>
                    <button className="text-[0.7rem] hover:cursor-pointer"><LuX /></button>
                </div>
                <div className="flex gap-3">
                    <div className="w-1/2 flex flex-col gap-1">
                        <label htmlFor="type" className="text-[0.8rem] font-medium">
                            Type
                        </label>
                        <Select type="type" /></div>
                    <div className="flex flex-col w-1/2 gap-1">
                        <label htmlFor="amount" className="text-[0.8rem] font-medium">{`Amount (${symbol})`}</label>
                        <input type="text" id="amount" value={amount} inputMode="decimal" onChange={handleAmount} className="bg-CARD-BG border border-BORDER rounded-md px-2 py-1 " />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="desc" className="text-[0.8rem] font-medium">Description</label>
                    <input type="text" id="desc" className="bg-CARD-BG border border-BORDER rounded-md w-full py-2 px-2 text-[0.8rem]" placeholder="What was this transaction for?" />
                </div>
                <div className="flex gap-3" >
                    <div className="w-1/2 flex flex-col gap-1">
                        <label htmlFor="category" className="text-[0.8rem] font-medium">Category</label>
                        <Select type="category" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-1">
                        <label htmlFor="date" className="text-[0.8rem] font-medium">Date</label>
                        <input type="date" name="date" id="date" className="bg-CARD-BG border border-BORDER rounded-md px-3 font-medium text-[0.9rem] py-1" />
                    </div>

                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="notes" className="text-[0.8rem] font-medium">Notes</label>
                    <p className="text-LIGHT-TEXT text-[0.8rem]">Optional</p>
                    <textarea name="notes" id="notes" placeholder="Anything else to remember?" className="bg-CARD-BG px-3 py-2 rounded-md border border-BORDER w-full" rows="4"></textarea>
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