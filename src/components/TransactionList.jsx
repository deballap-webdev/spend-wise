import { useStoreState } from "easy-peasy"
import TransactionItem from "./TransactionItem"
import { useEffect, useState, useRef } from "react";
const TransactionList = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const transactions = useStoreState((state) => state.transactions)
    const itemsPerPage = 8;
    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = pageNumber * itemsPerPage
    const isFirstPage = pageNumber === 1;
    const isLastPage = endIndex >= transactions.length
    /*  <table className="w-full">
                <thead>
                    <th>TRANSACTIONS</th>
                    <th>CATEGORY</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>ACTION</th>
                </thead>
                <tbody>
                    {transactions.map(transaction => <TransactionItem transaction={transaction} key={transaction.id} />)}

                </tbody>
            </table> */


    return (
        <div className="overflow-x-auto">
            <div className="flex  text-[0.7rem] bg-ICON-BG h-10 items-center rounded-tr-md rounded-tl-md border border-BORDER p-4 border-collapse" >
                <div className="w-3/10">TRANSACTION</div>
                <div className="w-1/5">CATEGORY</div>
                <div className="w-1/5">DATE</div>
                <div className="w-1/5">AMOUNT</div>
                <div className="w-1/10">ACTIONS</div>
            </div>
            {transactions.slice(startIndex, endIndex).map(transaction => <TransactionItem transaction={transaction} key={transaction.id} />)}
            <div className="bg-CARD-BG flex justify-between p-2 rounded-br-md rounded-bl-md border border-BORDER border-collapse text-[0.7rem]">
                {`Showing ${startIndex} - ${endIndex <= transactions.length ? endIndex : transactions.length}  of ${transactions.length} transactions`}
                <div >
                    <button className="mr-2 border border-BORDER px-2 py-1 rounded-md" disabled={isFirstPage} onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                    <button className="border border-BORDER px-2 py-1 bg-ICON-BG rounded-md" disabled={isLastPage} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
                </div>
            </div>
        </div>

    )
}

export default TransactionList