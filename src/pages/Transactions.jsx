import useActiveComponent from "../hooks/useActiveOutlet";
import { LuSearch, LuDownload } from "react-icons/lu";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/modals/TransactionForm";
import Select from "../components/Select"
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
      <div className="flex items-center  min-w-2/5 grow bg-CARD-BG rounded-md h-10 border border-BORDER px-3 focus-within:outline-1">
        <LuSearch />
        <input type="search" name="transactions" id="transaction" placeholder="Search transactions.." className="px-4 py-2 w-full outline-0" />
      </div>
      <div className="flex gap-3">
        <Select type="category" all={true} />
        <Select type="type" all={true} />
        <Select type="date" all={true} />
      </div>
    </div>
    <TransactionList />
    <TransactionForm />
  </div>);
};

export default Transactions;
