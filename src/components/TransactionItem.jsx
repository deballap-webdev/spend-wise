import properCase from "../utils/properCase";
import getIcon from "../utils/getIcon";
import { useState } from "react";
import Delete from "./modals/Delete";
import EditTransaction from "./modals/EditTransaction";
import { format, parseISO } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";
import convCurrency from "../utils/convCurrency";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";
const TransactionItem = ({ transaction }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const dateTime = parseISO(transaction.date);
  const deleteTransaction = useStoreActions(
    (actions) => actions.history.deleteTransaction,
  );
  const currency = useStoreState(state => state.settings.currency)
  const ratesCache = useStoreState(state => state.ratesCache.cache)
  const latestDate = useStoreState(state => state.latestDate)
  const targetCurrencyRate = ratesCache[transaction.date][currency] ? ratesCache[transaction.date][currency] : ratesCache[latestDate][currency]
  const convAmount = convCurrency(transaction.amount, currency, transaction.rateToUSD, targetCurrencyRate).toLocaleString()
  const symbol = useStoreState(state => state.symbol)
  return (
    <div className="bg-CARD-BG border-b-BORDER hover:bg-ICON-BG flex border-collapse justify-between border-b p-4 text-[0.78em]">
      <div className="flex w-3/10 items-center gap-2">
        {getIcon(transaction.category)}
        <div>
          <div className="font-bold">{properCase(transaction.description)}</div>
          <div className="text-LIGHT-TEXT">{properCase(transaction.type)}</div>
        </div>
      </div>
      <div className="w-1/5">
        <p className="bg-ICON-BG border border-BORDER w-fit rounded-md px-2 py-0.5">
          {transaction.category}
        </p>
      </div>
      <div className="w-1/5 text-[0.7rem]">
        {dateTime ? format(dateTime, "d MMM yyyy") : "N/A"}
      </div>
      <div className={`w-1/5 ${transaction.type === "expense" ? "text-red-500" : "text-GREEN"} text-[0.7rem] font-medium`}>{transaction.type === "expense" ? "-" : "+"}{symbol}{convAmount}</div>
      <div className="flex w-1/10 items-center justify-center" >
        <EditButton editFunction={() => setIsEditOpen(true)} />
        <DeleteButton setIsDeleteOpen={setIsDeleteOpen} />
      </div>
      {isDeleteOpen && (
        <Delete
          deleteFunction={deleteTransaction}
          setIsDeleteOpen={setIsDeleteOpen}
          functionParam={transaction.id}
          headText="transaction"
          description={transaction.description}
        />
      )}
      {isEditOpen && (
        <EditTransaction
          transaction={transaction}
          setIsEditOpen={setIsEditOpen}
          convAmount={convAmount}
        />
      )}
    </div>
  );
};

export default TransactionItem;
