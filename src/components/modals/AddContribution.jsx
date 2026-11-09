import { useStoreActions, useStoreState } from "easy-peasy"
import { useState } from "react"
import handleAmount from "../../utils/handleAmount"
import convCurrency from "../../utils/convCurrency"
import useEscapeModal from "../../hooks/useEscapeModal"
import Xbutton from "../buttons/Xbutton"
const AddContribution = ({ goal, setIsAddContOpen }) => {
    const symbol = useStoreState(state => state.symbol)
    const [amount, setAmount] = useState("")
    const editGoal = useStoreActions(actions => actions.targets.editGoal)
    const [invalid, setInvalid] = useState(false)
    const cache = useStoreState(state => state.ratesCache.cache)
    const latestDate = useStoreState(state => state.latestDate)
    const currency = useStoreState(state => state.settings.currency)
    const rateToUSD = cache[latestDate][goal.currency]
    const targetRate = cache[latestDate][currency]
    const convSavedAmount = convCurrency(goal.savedAmount, currency, rateToUSD, targetRate)
    const convtargetAmount = convCurrency(goal.targetAmount, currency, rateToUSD, targetRate)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (amount <= 0) {
            setInvalid(true)
            return
        }
        const updatedGoal = { ...goal, savedAmount: Number(goal.savedAmount + convCurrency(amount, goal.currency, targetRate, rateToUSD)) }
        editGoal(updatedGoal)
        setIsAddContOpen(false)
        setInvalid(false)
    }
    useEscapeModal(true, setIsAddContOpen)
    return (
        <div className="backDrop">
            <form className="bg-BODY-BG flex flex-col gap-3 rounded-md p-3 w-100" onSubmit={(e) => handleSubmit(e)}>
                <div className="flex justify-between"> <h3 className="font-bold">Add Contribution</h3>
                    <Xbutton closeFunc={() => setIsAddContOpen(false)} />
                </div > <p className="text-[0.8rem] text-LIGHT-TEXT">{goal.name} • {symbol}{Number(convtargetAmount) - Number(convSavedAmount)} remaining</p>
                <div className="input-label">
                    <label htmlFor="contributeAmount">Amount{`(${symbol})`}</label>
                    <input type="text" placeholder="0.00" id="contributeAmount" min="0.01" value={amount} required onChange={(e) => setAmount(handleAmount(e))} />
                    {invalid && <p className="text-red-500 text-[0.7rem]">Please enter a value greater than 0</p>}
                </div>
                <div className="flex gap-3 justify-end">
                    <button type="button" className="white-button" onClick={() => setIsAddContOpen(false)}>Cancel</button>
                    <button className="green-button" type="submit">+ Add Contribution</button>
                </div>
            </form>
        </div>
    )
}

export default AddContribution