import { useStoreState } from "easy-peasy";
import useActiveComponent from "../hooks/useActiveOutlet";
import GoalCard from "../components/GoalCard";
import CreateGoal from "../components/modals/CreateGoal"
import { useState } from "react";
const Goals = () => {
  useActiveComponent('Goals')
  const goals = useStoreState(state => state.goals)
  const [isCreateGoalOpen, setIsCreateGoalOpen] = useState(false);
  return <div className="grow bg-BODY-BG py-4 px-6 flex flex-col gap-4">
    <div className=" flex justify-between items-center">
      <div>
        <h2 className="font-bold text-[1.5rem]">Savings Goals</h2>
        <p className="text-[0.7rem]">Big dreams. Small steps. Start building your future</p>
      </div>
      <button className="bg-GREEN text-white  whitespace-nowrap h-fit px-2 py-1 rounded-md" onClick={() => setIsCreateGoalOpen(true)}>+ Create Goal</button>
    </div>
    <div className="flex flex-wrap gap-4">
      {goals.map(goal => <GoalCard goal={goal} key={goal.id} />)}
    </div>
    {isCreateGoalOpen && <CreateGoal setIsCreateGoalOpen={setIsCreateGoalOpen} />}

  </div>;
};

export default Goals;
