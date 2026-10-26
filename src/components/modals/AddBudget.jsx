import { useStoreActions, useStoreState } from "easy-peasy";
import Select from "../Select";
import { LuCheck, LuX } from "react-icons/lu";
import { useState } from "react";

const AddBudget = ({ setIsAddBudgetOpen }) => {
  const getFilteredCategories = useStoreState((state) => state.getFilteredCategories);
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");
  const [startDate, setStartDate] = useState("");
  const addBudget = useStoreActions((actions) => actions.allocations.addBudget);
  const budgets = useStoreState(state => state.allocations.budgets)
  const [exists, setExists] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    for (let i = 0; i < budgets.length; i++) {
      if (budgets[i].category === category) {
        setExists(true)
        return;
      }
    }
    const newBudget = {
      category,
      limit,
      startDate
    }
    setExists(false)
    addBudget(newBudget)
    setIsAddBudgetOpen(false)
  }
  return (
    <div
      className="backDrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsAddBudgetOpen(false);
      }}
    >
      <form className="bg-BODY-BG flex flex-col gap-3 rounded-md p-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-between">
          <h3 className="font-bold">Add Budget</h3>
          <button onClick={() => setIsAddBudgetOpen(false)}>
            <LuX />
          </button>
        </div>
        <p className="text-LIGHT-TEXT -mt-2 text-[0.8rem]">
          Set a monthly limit for a spending category
        </p>
        <div className="input-label">
          <label htmlFor="budgetCategory">Category</label>
          <Select
            options={getFilteredCategories("expense")}
            value={category}
            setValue={setCategory}
            id="budgetCategory"
          />
        </div>
        <div className="flex gap-3">
          <div className="input-label">
            <label htmlFor="limit">Monthlt Limit</label>
            <input
              type="text"
              name="limit"
              id="limit"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              required
            />
          </div>
          <div className="input-label">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              value={startDate}
              id="startDate"
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
        </div>
        {exists && <p className="text-red-500 font-bold text-[0.7rem]">A budget already exists for the category Edit its limit instead</p>}
        <div className="mt-4 flex justify-end gap-2">

          <button
            className="border-BORDER rounded-md border px-2 py-0.5 shadow"
            type="button"
            onClick={() => setIsAddBudgetOpen(false)}
          >
            Cancel
          </button>
          <button className="bg-NAV-ACTIVE flex items-center gap-1 rounded-md px-2 py-1 text-white">
            <LuCheck /> Add Budget
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBudget;
