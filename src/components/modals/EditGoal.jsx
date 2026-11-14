import { useState } from "react";
import handleAmount from "../../utils/handleAmount";
import { LuCheck } from "react-icons/lu";
import { useStoreActions, useStoreState } from
  "easy-peasy";
import convCurrency from "../../utils/convCurrency";
import useEscapeModal from "../../hooks/useEscapeModal";
import Xbutton from "../buttons/Xbutton";
const EditGoal = ({ setIsEditGoalOpen, goal, }) => {
  const [name, setName] = useState(goal.name);
  const convAmount = (amount) => convCurrency(Number(amount), goal.currency, targetRate, rateToUSD)
  const currency = useStoreState(state => state.settings.currency)
  const latestDate = useStoreState(state => state.latestDate)
  const cache = useStoreState(state => state.ratesCache.cache)
  const rateToUSD = cache[latestDate][goal.currency]
  const targetRate = cache[latestDate][currency]
  const [targetDate, setTargetDate] = useState(goal.targetDate);
  const editGoal = useStoreActions((actions) => actions.targets.editGoal);
  const symbol = useStoreState(state => state.symbol)
  const [targetAmount, setTargetAmount] = useState(convCurrency(goal.targetAmount, currency, rateToUSD, targetRate));
  const [savedAmount, setSavedAmount] = useState(convAmount(goal.savedAmount, currency, rateToUSD, targetRate));
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGoal = {
      name,
      savedAmount: convAmount(savedAmount),
      targetAmount: convAmount(targetAmount),
      targetDate,
      currency: goal.currency,
      id: goal.id,
    };
    console.log(goal.targetAmount)
    console.log(goal.savedAmount)
    console.log(rateToUSD)
    console.log(targetRate)

    console.log(savedAmount)
    console.log(targetAmount)
    console.log(cache[latestDate])
    console.log(convAmount(savedAmount))
    editGoal(updatedGoal);
    setIsEditGoalOpen(false);
  };
  useEscapeModal(true, setIsEditGoalOpen)
  return (
    <div
      className="backDrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsEditGoalOpen(false);
      }}
    >
      <form
        className="bg-BODY-BG flex w-50 min-w-max flex-col gap-3 rounded-md p-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex justify-between">
          <h3 className="font-bold">Edit Goal</h3>
          <Xbutton closeFunc={() => setIsEditGoalOpen(false)} />
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
              Target Amount {`(${symbol})`}
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
              Current Saved Amount {`(${symbol})`}
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
            className="white-button" type="button"
            onClick={() => setIsEditGoalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="green-button"
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
