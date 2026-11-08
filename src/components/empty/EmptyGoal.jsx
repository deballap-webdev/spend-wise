import { LuTarget } from "react-icons/lu"
import { Link } from "react-router"

const EmptyGoal = ({ setIsCreateGoalOpen }) => {
    return (
        <div className="flex flex-col items-center gap-3 mt-10">
            <LuTarget />
            <p className="font-bold text-[0.8rem]">No savings goals yet</p>
            <p className="text-[0.8rem] text-LIGHT-TEXT">Your next milestone starts here</p>
            {setIsCreateGoalOpen ?
                <button className="green-button" onClick={() => setIsCreateGoalOpen(true)}>+ Create Goal</button> : <Link to="/goals" className="text-white bg-GREEN px-2 py-1 rounded-md">+ Create Goal</Link>}
        </div>
    )
}

export default EmptyGoal