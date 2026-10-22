import { useState } from "react"
import { useStoreActions, useStoreState } from "easy-peasy";
import { LuPencil, LuTrash2, LuTarget } from "react-icons/lu"
import EditGoal from "../components/modals/EditGoal";
import Delete from "./modals/Delete";
const GoalCard = ({ goal }) => {
    const symbol = useStoreState(state => state.symbol)
    const percent = (goal.savedAmount / goal.targetAmount) * 100
    const [isEditGoalOpen, setIsEditGoalOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const deleteGoal = useStoreActions(actions => actions.deleteGoal)
    return (
        <div className="w-70">
            <div className="bg-LIGHT-GREEN h-50 flex items-center justify-center text-[5rem] text-GREEN2 rounded-tr-md rounded-tl-md"><LuTarget /></div>
            <div className="bg-CARD-BG  px-3 rounded-bl-md roounded-br-md flex flex-col gap-3 py-3">
                <p className="font-bold">{goal.name}
                </p>
                <p className="text-[0.8rem]">{`Target: ${goal.targetAmount}`}</p>
                <p className="text-[0.8rem]">{`Target Date: ${goal.targetDate}`}</p>
                <p className="font-bold text-[1.2rem]">{`${symbol}${goal.savedAmount} `}<span className="text-[0.7rem] font-normal">saved</span></p>
                <div className="w-full h-2 rounded-md bg-RANGE-BG">
                    <div className='h-2 rounded-md bg-GREEN' style={{ width: `${percent}%` }}></div>

                </div>
                <p className="text-[0.7rem]" >
                    {symbol}{goal.targetAmount - goal.savedAmount} remaining
                </p>
                <div className="flex justify-between">
                    <button className="bg-GREEN text-white px-3 py-1 rounded-md text-[0.8rem]"> + Add contribution </button>
                    <div >
                        <button className="mr-2" onClick={() => setIsEditGoalOpen(true)}><LuPencil /></button>
                        <button className="text-red-500" onClick={() => setIsDeleteOpen(true)}><LuTrash2 /></button>
                    </div>
                </div>
            </div>
            {isEditGoalOpen && <EditGoal goal={goal} setIsEditGoalOpen={setIsEditGoalOpen} />}
            {isDeleteOpen && <Delete setIsDeleteOpen={setIsDeleteOpen} functionParam={goal.id} description={goal.name} headText={goal.name} deleteFunction={deleteGoal} />}
        </div>

    )
}

export default GoalCard