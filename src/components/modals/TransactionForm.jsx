import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Select from "../Select";
import { LuCheck, LuX } from "react-icons/lu";
import handleAmount from "../../utils/handleAmount";

const TransactionForm = ({ setIsModalOpen }) => {
  const [amount, setAmount] = useState("");
  const symbol = useStoreState((state) => state.symbol);
  const categoryArray = useStoreState((state) => state.categoryArray);
  const typeArray = useStoreState((state) => state.typeArray);
  const addTransaction = useStoreActions(actions => actions.addTransaction)
  const [category, setCategory] = useState("food");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("expense");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      category,
      description: desc,
      date,
      note,
      type,
      amount,
      id: Date.now(),
    };
    addTransaction(newTransaction)
    setIsModalOpen(false);
  };

  return (
    <div
      className="backDrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsModalOpen(false);
      }}
    >
      <form
        className="bg-BODY-BG mx-auto flex min-w-75 flex-col gap-3 rounded-md px-4 py-2 md:w-100"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex justify-between">
          <h3 className="text-[1.2rem] font-bold">Add Transaction</h3>
          <button
            className="text-[0.7rem] hover:cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            <LuX />
          </button>
        </div>
        <div className="flex gap-3">
          <div className="input-label w-1/2">
            <label htmlFor="type">Type</label>
            <Select options={typeArray} value={type} setValue={setType} />
          </div>
          <div className="input-label w-1/2">
            <label htmlFor="amount">{`Amount (${symbol})`}</label>
            <input
              type="text"
              id="amount"
              value={amount}
              inputMode="decimal"
              onChange={(e) => setAmount(handleAmount(e))}
              required
            />
          </div>
        </div>
        <div className="input-label">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            placeholder="What was this transaction for?"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-3">
          <div className="input-label w-1/2">
            <label htmlFor="category">Category</label>
            <Select
              options={categoryArray}
              value={category}
              setValue={setCategory}
            />
          </div>
          <div className="input-label w-1/2">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-label w-full">
          <label htmlFor="notes">Notes</label>
          <p className="text-LIGHT-TEXT text-[0.8rem]">Optional</p>
          <textarea
            name="notes"
            id="notes"
            placeholder="Anything else to remember?"
            className="bg-CARD-BG border-BORDER w-full rounded-md border px-3 py-2"
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              className="border-BORDER rounded-md border px-2 font-medium shadow"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-NAV-ACTIVE flex items-center justify-center gap-2 rounded-md px-3 py-1 text-[0.9rem] font-medium text-white"
            >
              <LuCheck />
              Add Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
