import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Select from "../Select";
import { LuCheck, LuX, LuRefreshCcw } from "react-icons/lu";
import handleAmount from "../../utils/handleAmount";
import currencyApi from "../../api/currencyApi";
import useEscapeModal from "../../hooks/useEscapeModal";
import Xbutton from "../buttons/Xbutton";
const TransactionForm = ({ setIsModalOpen }) => {
  const [amount, setAmount] = useState("");
  const symbol = useStoreState((state) => state.symbol);
  const getFilteredCategories = useStoreState(state => state.getFilteredCategories)
  const typeArray = useStoreState((state) => state.typeArray);
  const addTransaction = useStoreActions(actions => actions.history.addTransaction)
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("expense");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const currency = useStoreState(state => state.settings.currency)
  const setRateCache = useStoreActions(state => state.ratesCache.setRateCache)
  const defaultCategory = useStoreState(state => state.settings.defaultCategory)
  const validCategories = getFilteredCategories(type)
  const initialCat = (validCategories.some(cat => cat.value === defaultCategory) ? defaultCategory : validCategories[0]?.value || "")
  const latestDate = useStoreState(state => state.latestDate)
  const ratesCache = useStoreState(state => state.ratesCache.cache)
  const [category, setCategory] = useState(initialCat);
  const [isAdding, setIsAdding] = useState(false)
  const [fetchError, setFetchError] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAdding(true)
    const newTransaction = {
      category,
      description: desc,
      date,
      note,
      type,
      amount,
      currency,
      id: Date.now(),
    };

    const data = await currencyApi(date, 'ngn,eur')
    let rates = data
    if (rates.err) {
      setIsAdding(false)
      rates.message ? setFetchError(rates.message) : rates.data ? setFetchError(rates.data.message) : setFetchError("Something went wrong")
      return
    }
    if (!Object.keys(rates).length) rates = ratesCache[latestDate]
    const rateToUSD = currency === "USD" ? 1 : rates[currency]
    setRateCache({ [date]: rates })
    addTransaction({ ...newTransaction, rateToUSD })
    setIsModalOpen(false);
    setIsAdding(false)
    setFetchError(null)
  };

  const handleTypeChange = (value) => {
    const validCategories = getFilteredCategories(value)
    setCategory(validCategories.some(cat => cat.value === defaultCategory) ? defaultCategory : validCategories[0]?.value || "")
    setType(value)
  }

  useEscapeModal(true, setIsModalOpen, isAdding)
  return (
    <div
      className="backDrop"
      onClick={(e) => {
        if ((e.target === e.currentTarget) && !isAdding) setIsModalOpen(false);
      }}
    >
      <form
        className="bg-BODY-BG mx-auto flex min-w-75 flex-col gap-3 rounded-md px-4 py-2 md:w-100"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex justify-between">
          <h3 className="text-[1.2rem] font-bold">Add Transaction</h3>
          <Xbutton closeFunc={() => setIsModalOpen(false)} disabled={isAdding} />
        </div>
        {fetchError && <p className="text-red-500">{fetchError} please try again</p>}
        <div className="flex gap-3">
          <div className="input-label w-1/2">
            <label htmlFor="type">Type</label>
            <Select options={typeArray} value={type} setValue={handleTypeChange} disabled={isAdding} />
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
              disabled={isAdding}

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
            disabled={isAdding}

          />
        </div>
        <div className="flex gap-3">
          <div className="input-label w-1/2">
            <label htmlFor="category">Category</label>
            <Select
              key={type}
              options={getFilteredCategories(type)}
              value={category}
              setValue={setCategory}
              disabled={isAdding}

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
              disabled={isAdding}
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
            disabled={isAdding}
          ></textarea>
          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              className="white-button"
              onClick={() => setIsModalOpen(false)}
              disabled={isAdding}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="green-button" disabled={isAdding}
            >
              {isAdding ? <> <LuRefreshCcw className="animate-spin" />
                Adding... </> : <><LuCheck /> Add Transaction</>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
