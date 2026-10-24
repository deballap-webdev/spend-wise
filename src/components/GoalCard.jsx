import { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { LuPencil, LuTrash2, LuTarget } from "react-icons/lu";
import { format, parseISO } from "date-fns"
import EditGoal from "../components/modals/EditGoal";
import Delete from "./modals/Delete";
import AddContribution from "./modals/AddContribution";
const GoalCard = ({ goal }) => {
  const symbol = useStoreState((state) => state.symbol);
  const percent = (goal.savedAmount / goal.targetAmount) * 100;
  const [isEditGoalOpen, setIsEditGoalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const deleteGoal = useStoreActions((actions) => actions.deleteGoal);
  const dateTime = parseISO(goal.targetDate)
  const [isAddContOpen, setIsAddContOpen] = useState(false)

  return (
    <div className="w-70">
      <div className="bg-LIGHT-GREEN text-GREEN2 flex h-50 items-center justify-center rounded-tl-md rounded-tr-md text-[5rem]">
        <LuTarget />
      </div>
      <div className="bg-CARD-BG roounded-br-md flex flex-col gap-3 rounded-bl-md px-3 py-3">
        <p className="font-bold">{goal.name}</p>
        <p className="text-[0.8rem]">{`Target: ${goal.targetAmount}`}</p>
        <p className="text-[0.8rem]">Target Date: {dateTime ? format(dateTime, "d MMM yyyy") : "N/A"}</p>
        <p className="text-[1.2rem] font-bold">
          {`${symbol}${goal.savedAmount} `}
          <span className="text-[0.7rem] font-normal">saved</span>
        </p>
        <div className="bg-RANGE-BG h-2 w-full rounded-md">
          <div
            className="bg-GREEN h-2 rounded-md"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <p className="text-[0.7rem]">
          {symbol}
          {goal.targetAmount - goal.savedAmount} remaining
        </p>
        <div className="flex justify-between">
          <button className="bg-GREEN rounded-md px-3 py-1 text-[0.8rem] text-white" onClick={() => setIsAddContOpen(true)}>
            {" "}
            + Add contribution
          </button>
          <div>
            <button className="mr-2" onClick={() => setIsEditGoalOpen(true)}>
              <LuPencil />
            </button>
            <button
              className="text-red-500"
              onClick={() => setIsDeleteOpen(true)}
            >
              <LuTrash2 />
            </button>
          </div>
        </div>
      </div>
      {isEditGoalOpen && (
        <EditGoal goal={goal} setIsEditGoalOpen={setIsEditGoalOpen} />
      )}
      {isDeleteOpen && (
        <Delete
          setIsDeleteOpen={setIsDeleteOpen}
          functionParam={goal.id}
          description={goal.name}
          headText={goal.name}
          deleteFunction={deleteGoal}
        />
      )}
      {isAddContOpen && <AddContribution goal={goal} setIsAddContOpen={setIsAddContOpen} />}

    </div>
  );
};

export default GoalCard;
