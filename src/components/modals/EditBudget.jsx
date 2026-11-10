import { LuCheck } from "react-icons/lu";
import Select from "../Select";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react"
import handleAmount from "../../utils/handleAmount";
import useEscapeModal from "../../hooks/useEscapeModal";
import Xbutton from "../buttons/Xbutton";
const EditBudget = ({ budget, setIsEditBudgetOpen, convLimit }) => {
  const getFilteredCategories = useStoreState(state => state.getFilteredCategories
  )
  const categoryArray = getFilteredCategories("expense")
  const [category, setCategory] = useState(budget.category)
  const [limit, setLimit] = useState(convLimit)

  const editBudget = useStoreActions(actions => actions.allocations.editBudget)
  const [exists, setExists] = useState(false)
  const symbol = useStoreState(state => state.symbol)
  const budgets = useStoreState(state => state.allocations.budgets)
  const handleSubmit = (e) => {
    e.preventDefault()
    const existingBudget = budgets.find(b => b.category === category && b !== budget)
    if (existingBudget) { setExists(true); return }
    const updatedBudget = {
      ...budget,
      category,
      limit,
    }
    setExists(false)
    editBudget(updatedBudget)
    setIsEditBudgetOpen(false)
  }
  useEscapeModal(true, setIsEditBudgetOpen)
  return (
    <div className="backDrop" onClick={(e) => {
      if (e.target === e.currentTarget) setIsEditBudgetOpen(false)
    }}>
      <form className="bg-BODY-BG flex flex-col gap-3 rounded-md p-3 min-w-max w-50" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-between"><h3 className="font-bold">Edit Budget</h3>
          <Xbutton closeFunc={() => setIsEditBudgetOpen(false)} />
        </div>
        <p className="text-LIGHT-TEXT -mt-2 mb-2 text-[0.8rem]">
          Update your monthly spending limit
        </p>
        <div className="input-label">
          <label htmlFor="category">Category</label>
          <Select id="editCategory" options={categoryArray} value={category} setValue={setCategory} />
        </div>

        <div className="input-label">
          <label htmlFor="limit">Monthlt Limit {`(${symbol})`}</label>
          <input type="text" name="limit" id="limit" value={limit} onChange={(e) => setLimit(handleAmount(e))} />
        </div>
        {exists && <p className="text-red-500 font-bold text-[0.7rem]">A budget already exists for the category Edit its limit instead</p>}
        <div className="flex justify-end gap-2">
          <button type="button" className="white-button" onClick={() => setIsEditBudgetOpen(false)}>
            Cancel
          </button>
          <button type="submit" className="green-button">
            <LuCheck /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBudget;
