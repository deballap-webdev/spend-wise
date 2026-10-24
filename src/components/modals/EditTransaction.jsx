import { useState } from "react";
import { LuX, LuCheck } from "react-icons/lu";
import Select from "../Select";
import { useStoreActions, useStoreState } from "easy-peasy";

const EditTransaction = ({ transaction, setIsEditOpen }) => {
  const [editType, setEditType] = useState(transaction.type);
  const [editDesc, setEditDesc] = useState(transaction.description);
  const [editCategory, setEditCategory] = useState(transaction.category);
  const [editNote, setEditNote] = useState(transaction.note);
  const [editAmount, setEditAmount] = useState(transaction.amount);
  const [editDate, setEditDate] = useState(transaction.date);
  const categoryArray = useStoreState((state) => state.categoryArray);
  const typeArray = useStoreState((state) => state.typeArray);
  const editTransaction = useStoreActions((actions) => actions.editTransaction)

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      note: editNote,
      type: editType,
      description: editDesc,
      category: editCategory,
      amount: editAmount,
      date: editDate,
      id: transaction.id,
    };
    editTransaction(updatedTransaction)
    setIsEditOpen(false);
  };

  return (
    <div
      className="backDrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsEditOpen(false);
      }}
    >
      <form
        className="bg-BODY-BG flex w-100 flex-col gap-3 rounded-md p-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex justify-between">
          {" "}
          <h3 className="font-bold">Edit Transaction</h3>
          <button type="button" onClick={() => setIsEditOpen(false)}>
            <LuX />
          </button>
        </div>
        <p className="text-LIGHT-TEXT text-[0.8rem]">
          Update the details of your transaction
        </p>
        <div className="flex gap-3">
          <div className="input-label w-1/2">
            <label htmlFor="type">Type</label>
            <Select
              options={typeArray}
              value={editType}
              setValue={setEditType}
            />
          </div>
          <div className="input-label w-1/2">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
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
          />
        </div>
        <div className="flex gap-3">
          <div className="input-label w-1/2">
            <label htmlFor="category">Category</label>
            <Select
              options={categoryArray}
              value={editCategory}
              setValue={setEditCategory}
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
          ></textarea>
        </div>
        <div className="mt-3 flex justify-end gap-2">
          <button
            type="button"
            className="border-BORDER rounded-md border px-2 font-medium shadow"
            onClick={() => setIsEditOpen(false)}
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
      </form>
    </div>
  );
};

export default EditTransaction;
