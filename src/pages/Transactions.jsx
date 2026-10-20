import useActiveComponent from "../hooks/useActiveOutlet";
import { useEffect, useState } from "react";
import { LuSearch, LuDownload } from "react-icons/lu";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/modals/TransactionForm";
import Select from "../components/Select"
import { useStoreState } from "easy-peasy";

const Transactions = () => {
  useActiveComponent('Transactions')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const typeArray = useStoreState((state) => state.typeArray)
  const categoryArray = useStoreState((state) => state.categoryArray)
  const transactions = useStoreState((state) => state.transactions)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All Categories")
  const [type, setType] = useState("All Types")
  const [dateRange, setDateRange] = useState("All Dates")

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])



  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(search.toLowerCase()) || transaction.category.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = category === "All Categories" || transaction.category.toLowerCase() === category.toLowerCase()

    const matchesType = type === "All Types" || transaction.type.toLowerCase() === type.toLowerCase()
    return matchesSearch && matchesType && matchesCategory
  })
  const handleFilter = (e) => {
    setSearch(e.target.value)
  }
  return (<div className="bg-BODY-BG grow p-4 flex flex-col gap-4">
    <div className="flex flex-wrap gap-y-2  justify-between items-center">
      <div><h2 className="text-[1.5rem] font-bold">Transactions</h2>
        <p className="text-[0.8rem] text-LIGHT-TEXT">Every transaction tells a story, Keep yours in one place</p>
      </div>
      <div className="flex">
        <button className="mr-3 flex flex-row gap-1 items-center px-2 py-1 border border-BORDER rounded-md shadow"><LuDownload /> Export</button>
        <button className="bg-NAV-ACTIVE text-white text-[0.7rem] px-3 py-1 rounded-md text-nowrap" onClick={() => setIsModalOpen(true)}> + Add Transaction</button>
      </div>
    </div>
    <div className="flex flex-wrap md:flex-nowrap gap-3 ">
      <div className="flex items-center  min-w-2/5 grow bg-CARD-BG rounded-md h-10 border border-BORDER px-3 focus-within:outline-1">
        <LuSearch />
        <input type="search" name="transactions" id="transaction" placeholder="Search transactions.." className="px-4 py-2 w-full outline-0" value={search} onChange={(e) =>
          handleFilter(e)
        } />
      </div>
      <div className="flex gap-3">
        <Select options={categoryArray} allOptionsLabel="All Categories" value={category} setValue={setCategory} />
        <Select options={typeArray} allOptionsLabel="All Types" value={type} setValue={setType} />
        <Select options={[{ value: "today", label: "Today" }, { value: "this week", label: "This Week" }, { value: "this month", label: "This Month" }]} allOptionsLabel="All Dates" value={dateRange} setValue={setDateRange} />
      </div>
    </div>
    <TransactionList transactions={filteredTransactions} />
    {isModalOpen && <TransactionForm setIsModalOpen={setIsModalOpen} />}
  </div>);
};

export default Transactions;
