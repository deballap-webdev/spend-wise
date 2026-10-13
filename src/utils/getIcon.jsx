import { LuFilm, LuBriefcase, LuCar, LuZap, LuHospital, LuBanana, LuShoppingCart } from "react-icons/lu"

const getIcon = (category) => category === "entertainment" ? <LuFilm className="icon text-PURPLE" /> : category === "food" ? <LuBanana className="icon text-GREEN " /> : category === "transport" ? <LuCar className="icon text-BLUE" /> : category === "bills" ? <LuZap className="icon text-black" /> : category === "health" ? <LuHospital className="icon text-[gray]" /> : category === "shopping" ? <LuShoppingCart className="icon text-[magenta]" /> : <LuBriefcase className="icon text-GREEN2" />


export default getIcon