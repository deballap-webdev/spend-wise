const Select = ({ type, all, value, setValue }) => {
    return (
        <select name={type} id={type} className="bg-CARD-BG px-2 py-2 w-full rounded-md border border-BORDER font-medium text-[0.7rem] min-w-fit" value={value} onChange={(e) => setValue(e.target.value)}>
            {type === "type" && <>
                {all && <option value="All Types" >All Types</option>}
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
            </>}
            {
                type === "category" && <>
                    {all && <option value="All Categories" >All Categories</option>}
                    <option value="Food" className="text-[rgb(246,248,250)]">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transport">Transport</option>
                    <option value="Bills" className="Bills">Bills</option>
                    <option value="Health">Health</option><option value="Income">Income</option>
                    <option value="Shopping">Shopping</option>
                </>
            }
            {
                type === "date" && <>
                    {all && <option value="All Dates" >All Dates</option>}
                    <option value="Today">Today</option>
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                    <option value="This Year">This Year</option>
                </>
            }
        </select>
    )
}

export default Select