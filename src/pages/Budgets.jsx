import useActiveComponent from "../hooks/useActiveOutlet";
import { useState } from "react";
import { useStoreState } from "easy-peasy";
import AddBudget from "../components/modals/AddBudget";
import BudgetCard from "../components/BudgetCard";
import EmptyBudget from "../components/empty/EmptyBudget";
import GoalCard from "../components/GoalCard";

const Budgets = () => {
  useActiveComponent("Budgets");
  const [isAddBudgetOpen, setIsAddBudgetOpen] = useState(false);
  const budgets = useStoreState((state) => state.budgets);
  const goals = useStoreState(state => state.goals)
  return (
    <main className="bg-BODY-BG grow p-4">
      <div className="flex justify-between items-center">
        <div className="mb-6"><h2 className="font-bold text-[1.2rem]">Monthly Budgets</h2>
          <p className="text-LIGHT-TEXT text-[0.8rem]">Stay on top of your spending</p>
        </div><button className="text-white bg-GREEN px-2 py-0.5 rounded-md h-fit whitespace-nowrap" onClick={() => setIsAddBudgetOpen(true)}>+ Add Budget</button>
      </div>
      <div className="flex flex-wrap gap-3">
        {budgets.map((budget) => (
          <BudgetCard budget={budget} key={budget.id} />
        ))}
      </div>
      {isAddBudgetOpen && <AddBudget setIsAddBudgetOpen={setIsAddBudgetOpen} />}
      {budgets.length === 0 && <EmptyBudget setIsAddBudgetOpen={setIsAddBudgetOpen} />
      }


      <h3 className="font-bold text-[0.8rem] my-4">Saving Goals</h3>
      <div className=" flex flex-wrap gap-3">
        {goals.map(goal => <GoalCard goal={goal} key={goal.id} />)}
      </div>
    </main>
  );
};

export default Budgets;
