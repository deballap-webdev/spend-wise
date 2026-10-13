import { useStoreState } from "easy-peasy"
import TransactionItem from "./TransactionItem"
const TransactionList = () => {
    const transactions = useStoreState((state) => state.transactions)
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
                <div className="w-2/5">TRANSACTION</div>
                <div className="w-1/5">CATEGORY</div>
                <div className="w-1/5">DATE</div>
                <div className="w-1/5">AMOUNT</div>
                <div className="w-1/10">ACTIONS</div>
            </div>
            {transactions.map(transaction => <TransactionItem transaction={transaction} key={transaction.id} />)}
            <div className="bg-CARD-BG flex justify-between p-2 rounded-br-md rounded-bl-md border border-BORDER border-collapse">
                {`Showing 1-8 of 12 transactions`}
                <div>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </div>


    )
}

export default TransactionList