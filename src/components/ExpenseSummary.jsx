import { useStoreState } from "easy-peasy";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router";
const ExpenseSummary = () => {
  const totalAmount = useStoreState(state => state.totalAmount)
  const symbol = useStoreState(state => state.symbol)
  return (
    <div className="bg-CARD-BG grow border-BORDER rounded-md border p-4">
      <div className="flex justify-between"><h3>Expenses by Category</h3>
        <Link to="analytics" className="">•••</Link>
      </div>
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
        <p className="font-bold text-[0.8rem]">{symbol}{totalAmount("expense").toLocaleString()}</p>
      </div>
    </div >
  );
};

export default ExpenseSummary;
