
import { useStoreState } from "easy-peasy"
import ProgressBar from "./ProgressBar"
const ExpenseSummary = () => {
    const percentage = useStoreState((state) => state.getPercentOfTotalExpense)

    return (
        <div className="bg-CARD-BG border-BORDER border p-4 rounded-md">
            <h3>
                Expenses by Category
            </h3>
            <div>
                <ProgressBar category="Food" color="#00a979" />
                <ProgressBar category="Entertainment" color="#a975ce" />
                <ProgressBar category="Bills" color="#dfa635" />
                <ProgressBar category="Transport" color="#3496de" />
                <ProgressBar category="Health" color="grey" />
                <ProgressBar category="Shopping" color="magenta" />
            </div>
            <div className="">
                <p>Total category spend</p>
            </div>
        </div>
    )
}

export default ExpenseSummary