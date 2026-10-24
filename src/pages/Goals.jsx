import { useStoreState } from "easy-peasy";
import useActiveComponent from "../hooks/useActiveOutlet";
import GoalCard from "../components/GoalCard";
import CreateGoal from "../components/modals/CreateGoal";
import EmptyGoal from "../components/empty/EmptyGoal";
import { useState } from "react";
const Goals = () => {
  useActiveComponent("Goals");
  const goals = useStoreState((state) => state.goals);
  const [isCreateGoalOpen, setIsCreateGoalOpen] = useState(false);
  return (
    <div className="bg-BODY-BG flex grow flex-col gap-4 px-6 py-4">
      <div className="flex items-center  justify-between">
        <div>
          <h2 className="text-[1.5rem] font-bold">Savings Goals</h2>
          <p className="text-[0.7rem]">
            Big dreams. Small steps. Start building your future
          </p>
        </div>
        <button
          className="bg-GREEN h-fit rounded-md px-2 py-1 whitespace-nowrap text-white"
          onClick={() => setIsCreateGoalOpen(true)}
        >
          + Create Goal
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {goals.map((goal) => (
          <GoalCard goal={goal} key={goal.id} />
        ))}
      </div>
      {goals.length === 0 && <EmptyGoal />}
      {isCreateGoalOpen && (
        <CreateGoal setIsCreateGoalOpen={setIsCreateGoalOpen} />
      )}
    </div>
  );
};

export default Goals;
