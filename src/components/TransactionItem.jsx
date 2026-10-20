import { LuPencil, LuTrash2 } from "react-icons/lu"
import properCase from "../utils/properCase"
import getIcon from "../utils/getIcon"
import { useState } from "react"
import DeleteTransaction from "./modals/DeleteTransaction"
import EditTransaction from "./modals/EditTransaction"
import { format } from "date-fns"

const TransactionItem = ({ transaction }) => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const dateTime = new Date(transaction.date).getTime()
    return (
        < div className="flex  justify-between p-4 bg-CARD-BG border-b border-b-BORDER border-collapse text-[0.78em]" >
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
            <div className="w-1/5 text-[0.7rem]">
                {dateTime ? format(dateTime, "d MMM yyyy") : "N/A"}
            </div>
            <div className="w-1/5" >
                {transaction.amount}
            </div>
            <div className="w-1/10 flex ">
                <button onClick={() => setIsEditOpen(true)}>
                    <LuPencil />
                </button>
                <button onClick={() => setIsDeleteOpen(true)}>
                    <LuTrash2 className="text-red-400 ml-3" />
                </button>
            </div>
            {isDeleteOpen && <DeleteTransaction transaction={transaction} setIsDeleteOpen={setIsDeleteOpen} />}
            {isEditOpen && <EditTransaction transaction={transaction} setIsEditOpen={setIsEditOpen} />}
        </ div>


    )
}

export default TransactionItem