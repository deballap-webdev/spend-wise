
const EmptyBudget = ({ setIsAddBudgetOpen }) => {
    return (
        <div className="flex-col flex items-center gap-1 my-20">
            <p className="font-bold text-[0.8rem]">No monthly budgets yet</p>
            <p className="text-[0.8rem] text-LIGHT-TEXT">Set a limit for your next month of spending</p>
            <button className="text-white bg-GREEN px-2 py-0.5 rounded-md h-fit whitespace-nowrap w-fit mt-2 " onClick={() => setIsAddBudgetOpen(true)}> + Add Budget</button>
        </div>
    )
}

export default EmptyBudget