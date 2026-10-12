import SummaryCard from "./SummaryCard"
import { LuWallet, LuArrowDown, LuArrowUp } from "react-icons/lu"
import { useStoreState } from "easy-peasy";

const SummaryCardWrapper = () => {
    const symbol = useStoreState((state) => state.symbol)
    const getTotalAmount = useStoreState((state) => state.totalAmount)
    const totalExpenses = getTotalAmount("expense")
    const totalIncome = getTotalAmount("income")

    return (
        <div className="flex flex-row gap-3 w-full">
            <SummaryCard text='Total Balance' amount={`${symbol}${totalIncome - totalExpenses}`} percentChange={"+12%"} icon={<LuWallet className="icon" />} />
            <SummaryCard text='Total Income' amount={`${symbol}${totalIncome}`} percentChange={"+20%"} icon={<LuArrowDown className="w-8 h-8 p-2 rounded-lg bg-LIGHT-GREEN" />} />
            <SummaryCard text='Total Expenses' amount={`${symbol}${totalExpenses}`} percentChange={"+18%"} icon={<LuArrowUp className="w-8 h-8 p-2 rounded-lg bg-LIGHT-RED" />} />
        </div>
    )
}

export default SummaryCardWrapper