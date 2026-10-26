import { LuPencil, LuTrash2, LuTriangleAlert } from "react-icons/lu";
import getIcon from "../utils/getIcon";
import properCase from "../utils/properCase";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useState } from "react"
import { format, parseISO } from "date-fns";
import EditBudget from "./modals/EditBudget";
import Delete from "./modals/Delete"
const BudgetCard = ({ budget }) => {
  const icon = getIcon(budget.category);
  const getTotalForCategory = useStoreState(state => state.getTotalForCategory)
  const amount = getTotalForCategory(budget.category)
  const symbol = useStoreState(state => state.symbol)
  const percent = ((amount / budget.limit) * 100).toFixed(2);
  const [isEditBudgetOpen, setIsEditBugetOPen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const deleteBudget = useStoreActions(actions => actions.allocations.deleteBudget)
  return (
    <div className="bg-CARD-BG p-3 rounded-md w-100  border border-BORDER flex flex-col gap-3">
      <div className="justify-between flex items-center flex-wrap">
        <div className="flex items-center gap-3">
          {icon}
          <p className="font-bold">{properCase(budget.category)} Budget</p>
        </div>
        <div className="flex gap-2 items-center">
          {percent > 100 && <div className="flex text-[0.7rem] items-center gap-1 text-red-600 font-bold bg-LIGHT-RED px-2 py-1 rounded-sm"><LuTriangleAlert /> Budget Exceeded</div>}
          <button onClick={() => setIsEditBugetOPen(true)}><LuPencil /></button>
          <button onClick={() => setIsDeleteOpen(true)}> <LuTrash2 className="text-red-500" /></button>
        </div>
      </div>
      <p className="font-bold text-[1.2rem]">{symbol}{amount}</p>
      <p className="text-[0.8rem] text-LIGHT-TEXT -mt-2">spent of {symbol}{budget.limit} monthly budget</p>
      <div className="bg-RANGE-BG h-2 rounded-md mt-3">
        <div className="bg-GREEN h-2 rounded-md" style={{ width: percent < 100 ? `${percent}%` : "100%", backgroundColor: percent > 100 ? "red" : null }}></div>
      </div>
      <div className="flex justify-between flex-row-reverse">
        <p className="text-[0.8rem] font-medium" style={{ color: percent < 100 ? "green" : percent === 100 ? "orange" : "red" }}>{percent}%</p>
        <p className="text-[0.8rem]"> {amount <= budget.limit ? `${symbol}${budget.limit - amount} remaining` : `${symbol}${amount - budget.limit} over budget`}</p>
      </div>
      <p className="text-LIGHT-TEXT text-[0.8rem]">Start {format(parseISO(budget.startDate), "d MMM yyyy")}</p>
      {isEditBudgetOpen && <EditBudget setIsEditBudgetOpen={setIsEditBugetOPen} budget={budget} />}
      {isDeleteOpen && <Delete deleteFunction={deleteBudget} functionParam={budget.id} description={properCase(`${budget.category} Budget`)} headText={properCase(`${budget.category} Budget`)} setIsDeleteOpen={setIsDeleteOpen} />}

    </div>
  );
};

export default BudgetCard;
