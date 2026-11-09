import { useStoreActions } from "easy-peasy";
import { LuX } from "react-icons/lu";
import Xbutton from "../buttons/Xbutton";

const ClearAll = ({ setIsClearAllOpen }) => {
  const setTransactions = useStoreActions(actions => actions.history.setTransactions)
  const setGoals = useStoreActions(actions => actions.targets.setGoals)
  const setBudgets = useStoreActions(actions => actions.allocations.setBudgets)
  const handleClear = () => {
    setTransactions([])
    setBudgets([])
    setGoals([])
    setIsClearAllOpen(false)
  }
  return (
    <div className="backDrop">
      <div className="bg-BODY-BG w-100 rounded-md  flex flex-col gap-2 p-3">
        <div className="flex justify-between">
          <p className="font-bold">Clear all finance data?</p>
          <Xbutton closeFunc={() => setIsClearAllOpen(false)} />
        </div>
        <p className="text-LIGHT-TEXT text-[0.8rem]">
          This removes all transactions, budgets, and goal contributions for
          this session. This cannot be undone
        </p>
        <div className="flex justify-end gap-2">
          <button className="border-DARK-GREEN cursor-pointer hover:bg-GREEN rounded-md border px-2 py-1 text-[0.8rem] hover:text-white" onClick={() => setIsClearAllOpen(false)}>
            Keep my data
          </button>
          <button className="rounded-md border hover:filter hover:brightness-110 cursor-pointer bg-red-600 px-2 py-1 text-[0.8rem] text-white" onClick={handleClear}>
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearAll;
