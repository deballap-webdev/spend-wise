import { useState } from "react";
import { LuX, LuCheck, LuRefreshCcw } from "react-icons/lu";
import Select from "../Select";
import { useStoreActions, useStoreState } from
  "easy-peasy";
import currencyApi from "../../api/currencyApi";
import useEscapeModal from "../../hooks/useEscapeModal";
import handleAmount from "../../utils/handleAmount";

const EditTransaction = ({ transaction, setIsEditOpen, convAmount }) => {
  const [editType, setEditType] = useState(transaction.type);
  const [editDesc, setEditDesc] = useState(transaction.description);
  const [editCategory, setEditCategory] = useState(transaction.category);
  const [editNote, setEditNote] = useState(transaction.note);
  const [editAmount, setEditAmount] = useState(convAmount);
  const [editDate, setEditDate] = useState(transaction.date);
  const typeArray = useStoreState((state) => state.typeArray);
  const editTransaction = useStoreActions((actions) => actions.history.editTransaction)
  const currency = useStoreState(state => state.settings.currency)
  const setRateCache = useStoreActions(actions => actions.ratesCache.setRateCache)
  const getFilteredCategories = useStoreState(state => state.getFilteredCategories)
  const defaultCategory = useStoreState(state => state.defaultCategory)
  const symbol = useStoreState(state => state.symbol)
  const [isSaving, setIsSaving] = useState(false)
  const [fetchError, setFetchError] = useState(null)
  const handleSubmit = async (e) => {
    setIsSaving(true)
    e.preventDefault();
    const updatedTransaction = {
      note: editNote,
      type: editType,
      description: editDesc,
      category: editCategory,
      amount: editAmount,
      date: editDate,
      id: transaction.id,
      currency: transaction.currency
    };
    const todayStr = new Date().toISOString().split('T')[0]
    const ratesDate = todayStr <= editDate ? editDate : todayStr
    const rates = await currencyApi(ratesDate, 'ngn,eur')
    if (rates.err) {
      rates.message ? setFetchError(rates.message) : rates.data ? setFetchError(rates.data.message) : setFetchError("Something went wrong")
      setIsSaving(false)
      return
    }

    const rateToUSD = currency === "USD" ? 1 : rates[currency]
    setRateCache({ [editDate]: rates })
    editTransaction({ ...updatedTransaction, rateToUSD })
    setIsEditOpen(false);
    setIsSaving(false)
    setFetchError(null)
  };
  const handleTypeChange = (value) => {
    const validCategories = getFilteredCategories(value)
    setEditCategory(validCategories.some(cat => cat.value === defaultCategory) ? defaultCategory : validCategories[0]?.value || "")
    setEditType(value)
  }
  useEscapeModal(true, setIsEditOpen, isSaving)

  return (
    <div
      className="backDrop"
      onClick={(e) => {
        if ((e.target === e.currentTarget) && !isSaving) setIsEditOpen(false);
      }}
    >
      <form
        className="bg-BODY-BG flex w-100 flex-col gap-3 rounded-md p-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex justify-between">
          <h3 className="font-bold">Edit Transaction</h3>
          <button type="button" onClick={() => setIsEditOpen(false)} disabled={isSaving}>
            <LuX />
          </button>
        </div>
        {fetchError && <p className="text-red-500">{fetchError} please try again</p>}
        <p className="text-LIGHT-TEXT text-[0.8rem]">
          Update the details of your transaction
        </p>
        <div className="flex gap-3">
          <div className="input-label w-1/2">
            <label htmlFor="type">Type</label>
            <Select
              options={typeArray}
              value={editType}
              setValue={handleTypeChange}
              disabled={isSaving}
            />
          </div>
          <div className="input-label w-1/2">
            <label htmlFor="amount">Amount {`(${symbol})`}</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={editAmount}
              onChange={(e) => setEditAmount(handleAmount(e))}
              disabled={isSaving}
            />
          </div>
        </div>
        <div className="input-label">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            required
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            disabled={isSaving}
          />
        </div>
        <div className="flex gap-3">
          <div className="input-label w-1/2">
            <label htmlFor="category">Category</label>
            <Select
              options={getFilteredCategories(editType)}
              value={editCategory}
              setValue={setEditCategory}
              disabled={isSaving}
            />
          </div>

          <div className="input-label w-1/2">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
              disabled={isSaving}
            />
          </div>
        </div>
        <div className="input-label">
          <label htmlFor="notes">Notes</label>
          <p className="text-LIGHT-TEXT text-[0.8rem]">Optional</p>
          <textarea
            type="text"
            id="notes"
            name="notes"
            className="rounded-md bg-white px-2 py-1 text-[0.8rem]"
            placeholder="Anything else to remember?"
            rows="3"
            value={editNote}
            onChange={(e) => setEditNote(e.target.value)}
            disabled={isSaving}
          ></textarea>
        </div>
        <div className="mt-3 flex justify-end gap-2">
          <button
            type="button"
            className="white-button" onClick={() => setIsEditOpen(false)}
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="green-button"
            disabled={isSaving}
          >
            {isSaving ? <><LuRefreshCcw /> Saving... </> : <><LuCheck />
              Save Changes</>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTransaction;
