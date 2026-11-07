import SummaryCard from "./SummaryCard";
import { LuWallet, LuArrowDown, LuArrowUp } from "react-icons/lu";
import { useStoreState } from "easy-peasy";
import getMonthlyTotals from "../utils/getMonthlyTotals";

const SummaryCardWrapper = () => {
  const symbol = useStoreState((state) => state.symbol);
  const getTotalAmountInCycle = useStoreState((state) => state.getTotalAmountInCycle);
  const totalExpenses = getTotalAmountInCycle("expense");
  const totalIncome = getTotalAmountInCycle("income");
  const transactions = useStoreState(state => state.history.transactions)
  const rates = useStoreState(state => state.ratesCache.cache)
  const currency = useStoreState(state => state.settings.currency)
  const monthlyTotals = getMonthlyTotals(transactions, rates, currency)
  console.log(Object.keys(monthlyTotals))
  return (
    <div className="flex w-full flex-row gap-3 flex-wrap">
      <SummaryCard
        text="Total Balance"
        amount={`${symbol}${(totalIncome - totalExpenses).toLocaleString()}`}
        percentChange={"+12%"}
        icon={<LuWallet className="icon" />}
        color="black"
      />
      <SummaryCard
        text="Total Income"
        amount={`${symbol}${totalIncome.toLocaleString()}`}
        percentChange={"+20%"}
        icon={<LuArrowDown className="bg-LIGHT-GREEN h-8 w-8 rounded-lg p-2" />}
        color="#009464"
      />
      <SummaryCard
        text="Total Expenses"
        amount={`${symbol}${totalExpenses.toLocaleString()}`}
        percentChange={"+18%"}
        icon={<LuArrowUp className="bg-LIGHT-RED h-8 w-8 rounded-lg p-2" />}
        color="#de4544"
      />
    </div>
  );
};

export default SummaryCardWrapper;
