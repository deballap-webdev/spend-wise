
import { useStoreState } from "easy-peasy"
import properCase from "../utils/properCase"
import getIcon from "../utils/getIcon"
import { format, parseISO } from "date-fns"
const RecentTransRow = ({ trans }) => {
    const symbol = useStoreState((state) => state.symbol)
    const icon = getIcon(trans.category)
    const dateTime = parseISO(trans.date)
    return (
        <div className="flex justify-between border-b border-b-BORDER items-center p-4">
            <div className="flex flex-row gap-2  items-center">
                {icon}
                <div className="text-[0.7rem] ">
                    <p className="font-bold ">{properCase(trans.description)}</p>
                    <div>
                        <p className="text-LIGHT-TEXT">{properCase(trans.category)} • {dateTime ? format(dateTime, "d MMM") : "N/A"}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-end ">
                {trans.type === "income" ? <p className="text-green-700 font-bold text-[0.7rem]">{`+${symbol}${trans.amount}`}</p> : <p className="text-red-700 font-bold text-[0.7rem]">{`-${symbol}${trans.amount}`}</p>}

                <p className="text-[0.7rem] text-LIGHT-TEXT">{properCase(trans.type)}</p>
            </div>
        </div>
    )
}

export default RecentTransRow