import useActiveComponent from "../hooks/useActiveOutlet";
import { useEffect, useState } from "react";
import { useStoreState, useStoreRehydrated } from "easy-peasy";
import { isThisWeek, isThisMonth, isToday } from "date-fns";
import { LuSearch, LuDownload } from "react-icons/lu";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/modals/TransactionForm";
import Select from "../components/Select";
import { parseISO } from "date-fns";
import properCase from "../utils/properCase";
import Loading from "../components/empty/Loading";
const Transactions = () => {
  useActiveComponent("Transactions");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const typeArray = useStoreState((state) => state.typeArray);
  const categoryArray = useStoreState((state) => state.categoryArray);
  const transactions = useStoreState((state) => state.history.transactions);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [type, setType] = useState("All Types");
  const [dateRange, setDateRange] = useState("All Dates");
  const isRehydrated = useStoreRehydrated()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(search.toLowerCase()) ||
      transaction.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      transaction.category.toLowerCase() === category.toLowerCase();

    const matchesType =
      type === "All Types" ||
      transaction.type.toLowerCase() === type.toLowerCase();

    const matchesDate = {
      "All Dates": transaction,
      Today: isToday(parseISO(transaction.date)),
      "This Week": isThisWeek(parseISO(transaction.date)),
      "This Month": isThisMonth(parseISO(transaction.date)),
    };
    return (
      matchesSearch &&
      matchesType &&
      matchesCategory &&
      matchesDate[properCase(dateRange)]
    );
  });
  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  if (!isRehydrated) return <Loading />

  return (
    <div className="bg-BODY-BG flex grow flex-col gap-4 p-4">
      <div className="flex flex-wrap items-center justify-between gap-y-2">
        <div>
          <h2 className="text-[1.5rem] font-bold">Transactions</h2>
          <p className="text-LIGHT-TEXT text-[0.8rem]">
            Every transaction tells a story, Keep yours in one place
          </p>
        </div>
        <div className="flex">
          <button className="border-BORDER mr-3 flex flex-row items-center gap-1 rounded-md border px-2 py-1 shadow">
            <LuDownload /> Export
          </button>
          <button
            className="bg-NAV-ACTIVE rounded-md px-3 py-1 text-[0.7rem] text-nowrap text-white"
            onClick={() => setIsModalOpen(true)}
          >
            {" "}
            + Add Transaction
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 md:flex-nowrap">
        <div className="bg-CARD-BG border-BORDER flex h-10 min-w-2/5 grow items-center rounded-md border px-3 focus-within:outline-1">
          <LuSearch />
          <input
            type="search"
            name="transactions"
            id="transaction"
            placeholder="Search transactions.."
            className="w-full px-4 py-2 outline-0"
            value={search}
            onChange={(e) => handleFilter(e)}
          />
        </div>
        <div className="flex gap-3">
          <Select
            options={categoryArray}
            allOptionsLabel="All Categories"
            value={category}
            setValue={setCategory}
          />
          <Select
            options={typeArray}
            allOptionsLabel="All Types"
            value={type}
            setValue={setType}
          />
          <Select
            options={[
              { value: "today", label: "Today" },
              { value: "this week", label: "This Week" },
              { value: "this month", label: "This Month" },
            ]}
            allOptionsLabel="All Dates"
            value={dateRange}
            setValue={setDateRange}
          />
        </div>
      </div>
      <TransactionList transactions={filteredTransactions} />
      {isModalOpen && <TransactionForm setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Transactions;
