import {
  LuFilm,
  LuBriefcase,
  LuCar,
  LuZap,
  LuHospital,
  LuBanana,
  LuShoppingCart,
} from "react-icons/lu";

const getIcon = (category) => {
  const iconLookUp = {
    entertainment: <LuFilm className="icon text-PURPLE" />,
    food: <LuBanana className="icon text-GREEN" />,
    transport: <LuCar className="icon text-BLUE" />,
    bills: <LuZap className="icon text-black" />,
    health: <LuHospital className="icon text-[gray]" />,
    shopping: <LuShoppingCart className="icon text-[magenta]" />,
    default: <LuBriefcase className="icon text-GREEN2" />,
  };
  return iconLookUp[category] ? iconLookUp[category] : iconLookUp.default;
};

export default getIcon;
