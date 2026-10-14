import useActiveComponent from "../hooks/useActiveOutlet";
import { LuSearch, LuDownload } from "react-icons/lu";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../modals/TransactionForm";
const Transactions = () => {
  useActiveComponent('Transactions')
  return (<div className="bg-BODY-BG grow p-4 flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <div><h2 className="text-[1.5rem] font-bold">Transactions</h2>
        <p className="text-[0.8rem] text-LIGHT-TEXT">Every transaction tells a story, Keep yours in one place</p>
      </div>
      <div className="flex ">
        <button className="mr-3 flex flex-row gap-1 items-center px-2 py-1 border border-BORDER rounded-md shadow"><LuDownload /> Export</button>
        <button className="bg-NAV-ACTIVE text-white text-[0.7rem] px-3 py-1 rounded-md"> + Add Transaction</button>
      </div>
    </div>
    <div className="flex flex-wrap md:flex-nowrap gap-3 ">
      <div className="flex items-center w-full min-w-50 bg-CARD-BG rounded-md h-10 border border-BORDER px-3 focus-within:outline-1">
        <LuSearch />
        <input type="search" name="transactions" id="transaction" placeholder="Search transactions.." className="px-4 py-2 w-full outline-0" />
      </div>
      <div className="flex gap-3">
        <select name="category" id="category" className="bg-CARD-BG px-2 py-1 rounded-md border border-BORDER font-medium w-fit text-[0.7rem]" defaultValue="All Categories">
          <option value="All Categoriess" >All Categories</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
          <option value="Bills" className="Bills">Bills</option>
          <option value="Health">Health</option><option value="Income">Income</option>
          <option value="Shopping">Shopping</option>
        </select>
        <select name="type" id="type" className="bg-CARD-BG px-2 py-1 rounded-md border border-BORDER font-medium w-fit text-[0.7rem]" defaultValue="All Types">
          <option value="All Types" >All Types</option>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
        <select name="date" id="date" className="bg-CARD-BG px-2 py-1 rounded-md border border-BORDER font-medium w-fit text-[0.7rem]" defaultValue="All Dates">
          <option value="All Dates" >All Dates</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
      </div>
    </div>
    <TransactionList />
    <TransactionForm />
  </div>);
};

export default Transactions;
