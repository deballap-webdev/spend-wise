import { useStoreState, useStoreRehydrated } from "easy-peasy";
import useActiveComponent from "../hooks/useActiveOutlet";
import GoalCard from "../components/GoalCard";
import CreateGoal from "../components/modals/CreateGoal";
import EmptyGoal from "../components/empty/EmptyGoal";
import { useState } from "react";
import Loading from "../components/empty/Loading";
const Goals = () => {
  useActiveComponent("Goals");
  const goals = useStoreState((state) => state.targets.goals);
  const [isCreateGoalOpen, setIsCreateGoalOpen] = useState(false);
  const isRehydrated = useStoreRehydrated()
  if (!isRehydrated) return <Loading />
  console.log(goals)
  return (
    <main className="bg-BODY-BG min-h-screen flex grow flex-col gap-4 px-6 pt-4 pb-12">
      <div className="flex items-center  justify-between">
        <div>
          <h2 className="text-[1.5rem] font-bold">Savings Goals</h2>
          <p className="text-[0.7rem]">
            Big dreams. Small steps. Start building your future
          </p>
        </div>
        <button
          className="green-button text-nowrap" onClick={() => setIsCreateGoalOpen(true)}
        >
          + Create Goal
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {goals.map((goal) => (
          <div className="w-[min(250px,80%)]">
            <GoalCard goal={goal} key={goal.id} />
          </div>
        ))}
      </div>
      {goals.length === 0 && <EmptyGoal setIsCreateGoalOpen={setIsCreateGoalOpen} />}
      {isCreateGoalOpen && (
        <CreateGoal setIsCreateGoalOpen={setIsCreateGoalOpen} />
      )}
    </main>
  );
};

export default Goals;
