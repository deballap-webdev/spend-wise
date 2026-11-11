import { useStoreState } from "easy-peasy";
import ProgressBar from "./ProgressBar";
const ExpenseSummary = () => {
  const getTotalAmountInCycle = useStoreState(state => state.getTotalAmountInCycle)
  const symbol = useStoreState(state => state.symbol)
  return (
    <div className="bg-CARD-BG  border-BORDER rounded-md border p-4">
      <h3 className="mr-8">Expenses by Category</h3>
      <div className="flex-col flex gap-3 py-4">
        <ProgressBar category="Food" color="#00a979" />
        <ProgressBar category="Entertainment" color="#a975ce" />
        <ProgressBar category="Bills" color="#dfa635" />
        <ProgressBar category="Transport" color="#3496de" />
        <ProgressBar category="Health" color="grey" />
        <ProgressBar category="Shopping" color="magenta" />
      </div>
      <div className=" border-t border-BORDER flex justify-between items-center pt-4">
        <p className="text-[0.8rem] text-LIGHT-TEXT">Total category spend</p>
        <p className="font-bold text-[0.8rem]">{symbol}{getTotalAmountInCycle("expense").toLocaleString()}</p>
      </div>
    </div >
  );
};

export default ExpenseSummary;
