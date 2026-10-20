import { useStoreState } from "easy-peasy"
import TransactionItem from "./TransactionItem"
import { useState } from "react";
import EmptyTransaction from "./EmptyTransaction";
const TransactionList = ({ transactions }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const itemsPerPage = 8;
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = pageNumber * itemsPerPage
    const isFirstPage = pageNumber === 1;
    const isLastPage = transactions ? endIndex >= transactions.length : 0
    return (
        <div className="overflow-x-auto border border-BORDER rounded-md" >
            <div className="flex  text-[0.7rem] bg-ICON-BG h-10 items-center rounded-tr-md rounded-tl-md border-b border-b-BORDER p-4 border-collapse" >
                <div className="w-3/10">TRANSACTION</div>
                <div className="w-1/5">CATEGORY</div>
                <div className="w-1/5">DATE</div>
                <div className="w-1/5">AMOUNT</div>
                <div className="w-1/10">ACTIONS</div>
            </div>
            {transactions.length !== 0 && (
                <>
                    {transactions.slice(startIndex, endIndex).map(transaction => <TransactionItem transaction={transaction} key={transaction.id} />)}

                </>)}
            {!transactions.length && <EmptyTransaction />}
            <div className="bg-CARD-BG flex justify-between py-2 px-4 rounded-bl-lg rounded-br-lg text-[0.7rem]">
                {transactions.length ? `Showing ${startIndex + 1} - ${endIndex <= transactions.length ? endIndex : transactions.length}  of ${transactions.length} transactions` : `0 transactions`}
                <div >
                    <button className="mr-2 border border-BORDER px-2 py-1 rounded-md" disabled={isFirstPage} onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                    <button className="border border-BORDER px-2 py-1 bg-ICON-BG rounded-md" disabled={isLastPage} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default TransactionList