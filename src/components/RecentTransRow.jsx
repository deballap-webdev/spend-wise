import { useStoreState } from "easy-peasy";
import properCase from "../utils/properCase";
import getIcon from "../utils/getIcon";
import convCurrency from "../utils/convCurrency";
import { format, parseISO } from "date-fns";
const RecentTransRow = ({ trans }) => {
  const symbol = useStoreState((state) => state.symbol);
  const icon = getIcon(trans.category);
  const dateTime = parseISO(trans.date);
  const currency = useStoreState(state => state.settings.currency)
  const cache = useStoreState(state => state.ratesCache.cache)
  const targetRate = cache[trans.date][currency]
  localStorage.clear()
  const formattedAmount = convCurrency(trans.amount, currency, trans.rateToUSD, targetRate).toLocaleString()
  return (
    <div className="border-b-BORDER flex items-center justify-between border-b p-4">
      <div className="flex flex-row items-center gap-2">
        {icon}
        <div className="text-[0.7rem]">
          <p className="font-bold">{properCase(trans.description)}</p>
          <div>
            <p className="text-LIGHT-TEXT">
              {properCase(trans.category)} •
              {dateTime ? format(dateTime, "d MMM") : "N/A"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">

        {trans.type === "income" ? (
          <p className="text-[0.7rem] font-bold text-green-700">{`+${symbol}${(formattedAmount)}`}</p>
        ) : (
          <p className="text-[0.7rem] font-bold text-red-700">{`-${symbol}${formattedAmount}`}</p>
        )}

        <p className="text-LIGHT-TEXT text-[0.7rem]">
          {properCase(trans.type)}
        </p>
      </div>
    </div>
  );
};

export default RecentTransRow;
