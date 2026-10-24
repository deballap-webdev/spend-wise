import { useState } from "react";
import handleAmount from "../../utils/handleAmount";
import { LuX, LuCheck } from "react-icons/lu";
import { useStoreActions } from "easy-peasy";
const EditGoal = ({ setIsEditGoalOpen, goal }) => {
  const [name, setName] = useState(goal.name);
  const [targetAmount, setTargetAmount] = useState(goal.targetAmount);
  const [savedAmount, setSavedAmount] = useState(goal.savedAmount);
  const [targetDate, setTargetDate] = useState(goal.targetDate);
  const editGoal = useStoreActions((actions) => actions.editGoal);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGoal = {
      name,
      targetAmount,
      savedAmount,
      targetDate,
      id: goal.id,
    };
    editGoal(updatedGoal);
    setIsEditGoalOpen(false);
  };
  return (
    <div
      className="backDrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsEditGoalOpen(false);
      }}
    >
      <form
        className="bg-BODY-BG flex w-100 flex-col gap-3 rounded-md p-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex justify-between">
          <h3 className="font-bold">Edit Goal</h3>
          <button type="button" onClick={() => setIsEditGoalOpen(false)}>
            <LuX />
          </button>
        </div>

        <p className="text-LIGHT-TEXT -mt-2 text-[0.8rem]">
          Agjust your savings goal
        </p>
        <div className="flex flex-col gap-1">
          <label htmlFor="goalName" className="text-[0.8rem] font-medium">
            Goal Name
          </label>
          <input
            type="text"
            id="goalName"
            name="goalName"
            placeholder="e.g Emergency Fund"
            className="SSborder-BORDER rounded-md border bg-white px-2 py-2 text-[0.8rem]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <div className="flex w-1/2 flex-col gap-1">
            <label htmlFor="targetAmount" className="text-[0.8rem] font-medium">
              Target Amount{" "}
            </label>
            <input
              type="text"
              id="targetAmount"
              name="targetAmount"
              placeholder="0.00"
              className="border-BORDER rounded-md border bg-white px-2 py-2 text-[0.8rem]"
              required
              value={targetAmount}
              onChange={(e) => setTargetAmount(handleAmount(e))}
            />
          </div>
          <div className="flex w-1/2 flex-col gap-1">
            <label htmlFor="savedAmount" className="text-[0.8rem] font-medium">
              Current Saved Amount
            </label>
            <input
              type="text"
              id="savedAmount"
              name="savedAmount"
              placeholder="0"
              className="border-BORDER rounded-md border bg-white px-2 py-2 text-[0.8rem]"
              required
              value={savedAmount}
              onChange={(e) => setSavedAmount(handleAmount(e))}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="targetDate" className="text-[0.8rem] font-medium">
            Target Date
          </label>
          <input
            type="date"
            name="targetDate"
            id="targetDate"
            className="border-BORDER rounded-md border bg-white px-2 py-2 text-[0.8rem]"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="border-BORDER rounded-md border px-2 py-0.5 text-[0.8rem] font-medium shadow"
            type="button"
            onClick={() => setIsEditGoalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-NAV-ACTIVE flex items-center justify-center gap-1 rounded-md px-2 py-0.5 text-[0.8rem] font-medium text-white"
            type="submit"
          >
            <LuCheck />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGoal;
