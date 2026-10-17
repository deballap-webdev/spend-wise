import { LuPencil, LuTrash2 } from "react-icons/lu"
import properCase from "../utils/properCase"
import getIcon from "../utils/getIcon"
import { useStoreActions, useStoreState } from "easy-peasy"
const TransactionItem = ({ transaction }) => {
    /*   <tr className="flex  justify-between p-4 bg-CARD-BG border border-BORDER border-collapse text-[0.8rem] w-full" >
          <td className=" flex gap-2 items-center">
              {getIcon(transaction.category)}
              <div>
                  <div className="font-bold">
                      {properCase(transaction.description)}
                  </div>
                  <div className="text-LIGHT-TEXT">
                      {properCase(transaction.type)}
                  </div>
              </div>
          </td>
          <td >
              <p className="bg-ICON-BG w-fit px-2 py-0.5 rounded-md">{transaction.category}</p>
          </td>
          <td >
              {transaction.date}
          </td>
          <td >
              {transaction.amount}
          </td>
          <td className="w-1/10">
              <button>
                  <LuPencil />
              </button>
              <button>
                  <LuTrash2 className="text-red-400 ml-3" />
              </button>
          </td>
      </tr> */

    const setTransactions = useStoreActions((actions) => actions.setTransactions)
    const transactions = useStoreState((state) => state.transactions)
    const handleDelete = (id) => {
        transactions.forEach((transaction) => {
            if (transaction.id === id) {
                const transClone = [...transactions]
                transClone.splice(transactions.indexOf(transaction), 1)
                setTransactions(transClone)
            }
        })
    }
    return (
        < div className="flex  justify-between p-4 bg-CARD-BG border border-BORDER border-collapse text-[0.78em]" >
            <div className="w-3/10 flex gap-2 items-center">
                {getIcon(transaction.category)}
                <div>
                    <div className="  font-bold">
                        {properCase(transaction.description)}
                    </div>
                    <div className=" text-LIGHT-TEXT">
                        {properCase(transaction.type)}
                    </div>
                </div>
            </div>
            <div className="w-1/5">
                <p className="bg-ICON-BG  w-fit px-2 py-0.5 rounded-md">{transaction.category}</p>
            </div>
            <div className="w-1/5">
                {transaction.date}
            </div>
            <div className="w-1/5" >
                {transaction.amount}
            </div>
            <div className="w-1/10 flex ">
                <button>
                    <LuPencil />
                </button>
                <button onClick={() => {
                    handleDelete(transaction.id)
                }}>
                    <LuTrash2 className="text-red-400 ml-3" />
                </button>
            </div>
        </ div>

    )
}

export default TransactionItem