import { LuCheck, LuX } from "react-icons/lu"
import handleAmount from "../../utils/handleAmount"
import { useState } from "react"
import { useStoreActions } from "easy-peasy"
const CreateGoal = ({ setIsCreateGoalOpen }) => {
  const [targetAmount, setTargetAmount] = useState("")
  const [savedAmount, setSavedAmount] = useState("")
  const [name, setName] = useState("")
  const [targetDate, setTargetDate] = useState("")
  const addGoal = useStoreActions((actions) => actions.addGoal)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newGoal = {
      targetAmount,
      name,
      targetDate,
      savedAmount,
      id: Date.now()
    }
    addGoal(newGoal)
    setIsCreateGoalOpen(false)
  }
  return (
    <div className="backDrop" onClick={(e) => {
      if (e.target === e.currentTarget) {
        setIsCreateGoalOpen(false)
      }
    }}>
      <form className="bg-BODY-BG w-100 p-2 rounded-md flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-between">
          <h3 className="font-bold" >Create Goal</h3>
          <button type="button" onClick={() => setIsCreateGoalOpen(false)}><LuX /></button>
        </div>

        <p className="text-LIGHT-TEXT text-[0.8rem] -mt-2">Give your next milestone a name</p>
        <div className="flex flex-col gap-1">
          <label htmlFor="goalName" className="font-medium text-[0.8rem]">Goal Name</label>
          <input type="text" id="goalName" name="goalName" placeholder="e.g Emergency Fund" className="border px-2 py-2 rounded-md SSborder-BORDER bg-white text-[0.8rem]" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-1 w-1/2">
            <label htmlFor="targetAmount" className="font-medium text-[0.8rem]">Target Amount </label>
            <input type="text" id="targetAmount" name="targetAmount" placeholder="0.00" className="border px-2 py-2 rounded-md border-BORDER bg-white text-[0.8rem]" required value={targetAmount} onChange={(e) => setTargetAmount(handleAmount(e))} />
          </div>
          <div className="flex flex-col gap-1 w-1/2">
            <label htmlFor="savedAmount" className="font-medium text-[0.8rem]">Current Saved Amount</label>
            <input type="text" id="savedAmount" name="savedAmount" placeholder="0" className="border px-2 py-2 rounded-md border-BORDER bg-white text-[0.8rem]" required value={savedAmount} onChange={(e) => setSavedAmount(handleAmount(e))} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="targetDate" className="font-medium text-[0.8rem]">Target Date</label>
          <input type="date" name="targetDate" id="targetDate" className="border px-2 py-2 rounded-md border-BORDER bg-white text-[0.8rem]" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
        </div>
        <div className="flex justify-end gap-2">
          <button className="border px-2 py-0.5 rounded-md border-BORDER text-[0.8rem] shadow font-medium" type="button" onClick={() => setIsCreateGoalOpen(false)}>Cancel</button>
          <button className="bg-NAV-ACTIVE text-white px-2 py-0.5 rounded-md items-center gap-1 text-[0.8rem] flex justify-center font-medium" type="submit"><LuCheck />Create Goal</button>
        </div>
      </form>
    </div>
  )
}

export default CreateGoal