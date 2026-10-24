import { useStoreState } from "easy-peasy";
import { useState } from "react";
import TransactionItem from "./TransactionItem";
import EmptyTransaction from "./empty/EmptyTransaction";
const TransactionList = ({ transactions }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;
  const isFirstPage = pageNumber === 1;
  const isLastPage = transactions ? endIndex >= transactions.length : 0;
  return (
    <div className="border-BORDER overflow-x-auto rounded-md border">
      <div className="bg-ICON-BG border-b-BORDER flex h-10 border-collapse items-center rounded-tl-md rounded-tr-md border-b p-4 text-[0.7rem]">
        <div className="w-3/10">TRANSACTION</div>
        <div className="w-1/5">CATEGORY</div>
        <div className="w-1/5">DATE</div>
        <div className="w-1/5">AMOUNT</div>
        <div className="w-1/10">ACTIONS</div>
      </div>
      {transactions.length !== 0 && (
        <>
          {transactions.slice(startIndex, endIndex).map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
        </>
      )}
      {!transactions.length && <EmptyTransaction />}
      <div className="bg-CARD-BG flex justify-between rounded-br-lg rounded-bl-lg px-4 py-2 text-[0.7rem]">
        {transactions.length
          ? `Showing ${startIndex + 1} - ${endIndex <= transactions.length ? endIndex : transactions.length}  of ${transactions.length} transactions`
          : `0 transactions`}
        <div>
          <button
            className="border-BORDER mr-2 rounded-md border px-2 py-1"
            disabled={isFirstPage}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>
          <button
            className="border-BORDER bg-ICON-BG rounded-md border px-2 py-1"
            disabled={isLastPage}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
