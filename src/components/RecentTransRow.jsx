import { LuFilm, LuBriefcase, LuShoppingBasket, LuCar, LuCloudLightning, } from "react-icons/lu"
import { useStoreState } from "easy-peasy"
import properCase from "../utils/ProperCase"

const RecentTransRow = ({ trans }) => {
    const icon = trans.category === "entertainment" ? <LuFilm className="icon text-purple-700" /> : trans.category === "food" ? <LuShoppingBasket className="icon text-green-700 " /> : trans.category === "transport" ? <LuCar className="icon text-blue-500" /> : trans.category === "bills" ? <LuCloudLightning className="icon" /> : <LuBriefcase className="icon text-green-500" />
    const symbol = useStoreState((state) => state.symbol)

    return (
        <div className="flex justify-between border-b border-b-BORDER items-center p-4">
            <div className="flex flex-row gap-2  items-center">
                {icon}
                <div className="text-[0.7rem] ">
                    <p className="font-bold ">{properCase(trans.description)}</p>
                    <div>
                        <p className="text-LIGHT-TEXT">{properCase(trans.category)} • 8 Oct</p>
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