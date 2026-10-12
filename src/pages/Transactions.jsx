import useActiveComponent from "../hooks/useActiveOutlet";
import { LuSearch } from "react-icons/lu";
import TransactionList from "../components/TransactionList";
const Transactions = () => {
  useActiveComponent('Transactions')
  return (<div className="bg-BODY-BG grow p-4">  <h2>Transactions</h2>
    <div className="flex flex-wrap md:flex-nowrap gap-3 ">
      <div className="flex items-center w-full min-w-50 bg-CARD-BG rounded-md h-10 border border-BORDER px-3 focus-within:outline-1">
        <LuSearch />
        <input type="search" name="transactions" id="transaction" placeholder="Search transactions.." className="px-4 py-2 w-full outline-0" />
      </div>
      <div className="flex gap-3">
        <select name="category" id="category" className="bg-CARD-BG px-4 py-2 rounded-md border border-BORDER" defaultValue="All Categories">
          <option value="All Categoriess" >All Categories</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
          <option value="Bills" className="Bills">Bills</option>
          <option value="Health">Health</option><option value="Income">Income</option>
          <option value="Shopping">Shopping</option>
        </select>
        <select name="type" id="type" className="bg-CARD-BG px-4 py-2 rounded-md border border-BORDER" defaultValue="All Types">
          <option value="All Types" >All Types</option>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
        <select name="date" id="date" className="bg-CARD-BG px-4 py-2 rounded-md border border-BORDER" defaultValue="All Dates">
          <option value="All Dates" >All Dates</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
      </div>
    </div>
  </div>);
};

export default Transactions;
