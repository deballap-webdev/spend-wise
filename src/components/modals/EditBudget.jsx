import { LuCheck, LuX } from "react-icons/lu";
import Select from "../Select";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react"
import handleAmount from "../../utils/handleAmount";
const EditBudget = ({ budget, setIsEditBudgetOpen, convLimit }) => {
  const categoryArray = useStoreState(state => state.categoryArray
  )
  const [category, setCategory] = useState(budget.category)
  const [limit, setLimit] = useState(convLimit)
  const [startDate, setStartDate] = useState(budget.startDate)
  const editBudget = useStoreActions(actions => actions.allocations.editBudget)
  const symbol = useStoreState(state => state.symbol)
  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedBudget = {
      category,
      limit,
      startDate,
      currency: budget.currency,
      id: budget.id
    }
    editBudget(updatedBudget)
    setIsEditBudgetOpen(false)
  }
  return (
    <div className="backDrop" onClick={(e) => {
      if (e.target === e.currentTarget) setIsEditBudgetOpen(false)
    }}>
      <form className="bg-BODY-BG flex flex-col gap-3 rounded-md p-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-between"><h3 className="font-bold">Edit Budget</h3>
          <button type="button" onClick={() => setIsEditBudgetOpen(false)}><LuX /></button>
        </div>
        <p className="text-LIGHT-TEXT -mt-2 mb-2 text-[0.8rem]">
          Update your monthly spending limit
        </p>
        <div className="input-label">
          <label htmlFor="category">Category</label>
          <Select id="editCategory" options={categoryArray} value={category} setValue={setCategory} />
        </div>
        <div className="flex gap-3">
          <div className="input-label">
            <label htmlFor="limit">Monthlt Limit {`(${symbol})`}</label>
            <input type="text" name="limit" id="limit" value={limit} onChange={(e) => setLimit(handleAmount(e))} />
          </div>
          <div className="input-label">
            <label htmlFor="startDate">Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button type="button" className="border-BORDER rounded-md border px-2 py-0.5 shadow" onClick={() => setIsEditBudgetOpen(false)}>
            Cancel
          </button>
          <button type="sumbit" className="bg-NAV-ACTIVE flex items-center gap-1 rounded-md px-2 py-1 text-white">
            <LuCheck /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBudget;
