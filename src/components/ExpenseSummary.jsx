
import { useStoreState } from "easy-peasy"
const ExpenseSummary = () => {
    const getTotalExpense = useStoreState((state) => state.getTotalExpenseForCategory)
    const getTotalAmount = useStoreState((state) => state.totalAmount)
    return (
        <div className="bg-CARD-BG border-BORDER border p-4 rounded-md">
            <h3>
                Expenses by Category
            </h3>
            {/*  <label htmlFor="food">Food</label>
            <input type="range" name="food" id="foodExpense" value={getTotalExpense("food")} max={getTotalAmount("expense")} />
            <label htmlFor="bills">Bills</label>
            <input type="range" name="bills" id="billsExpense" value={getTotalExpense("bills")} max={getTotalAmount("expense")} />
            <label htmlFor="transport">Transport</label>
            <input type="range" name="transport" id="transportExpense" value={getTotalExpense("transport")} max={getTotalAmount("expense")} />
            <label htmlFor="e">E</label>
            <input type="range" name="e" id="eExpense" value={getTotalExpense("e")} max={getTotalAmount("expense")} /> */}
            <div className="">
                <p>Total category spend</p>
                <p>{getTotalAmount("expense")}</p>

            </div>
        </div>
    )
}

export default ExpenseSummary