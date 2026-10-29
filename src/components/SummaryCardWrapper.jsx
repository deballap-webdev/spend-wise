import SummaryCard from "./SummaryCard";
import { LuWallet, LuArrowDown, LuArrowUp } from "react-icons/lu";
import { useStoreState } from "easy-peasy";

const SummaryCardWrapper = () => {
  const symbol = useStoreState((state) => state.symbol);
  const getTotalAmount = useStoreState((state) => state.totalAmount);
  const totalExpenses = getTotalAmount("expense");
  const totalIncome = getTotalAmount("income");
  localStorage.clear()
  return (
    <div className="flex w-full flex-row gap-3">
      <SummaryCard
        text="Total Balance"
        amount={`${symbol}${totalIncome - totalExpenses}`}
        percentChange={"+12%"}
        icon={<LuWallet className="icon" />}
        color="black"
      />
      <SummaryCard
        text="Total Income"
        amount={`${symbol}${totalIncome}`}
        percentChange={"+20%"}
        icon={<LuArrowDown className="bg-LIGHT-GREEN h-8 w-8 rounded-lg p-2" />}
        color="#009464"
      />
      <SummaryCard
        text="Total Expenses"
        amount={`${symbol}${totalExpenses}`}
        percentChange={"+18%"}
        icon={<LuArrowUp className="bg-LIGHT-RED h-8 w-8 rounded-lg p-2" />}
        color="#de4544"
      />
    </div>
  );
};

export default SummaryCardWrapper;
