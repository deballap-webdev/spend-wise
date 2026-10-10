import {
  LuTrendingUp,
  LuLayoutDashboard,
  LuArrowLeftRight,
  LuWallet,
  LuTarget,
  LuSettings,
  LuCircleHelp,
  LuChartNoAxesCombined,
} from "react-icons/lu";
import NavLink from "./NavLink";
const Nav = () => {
  return (
    <nav className="flex py-4 px-3 w-fit items-center bg-black h-screen flex-col gap-1">
      <div className="text-white flex h-20 items-center gap-2"><LuTrendingUp className="text-white bg-green-800  w-10 h-10 p-2 rounded-lg"/> 
      <p>Spend Wise</p></div>
      <div>
      <h3 className="text-white w-full px-4">workspace</h3>
        <NavLink icon={<LuLayoutDashboard/>} text='Dashboard'/>
        <NavLink icon={<LuArrowLeftRight/>} text='Transactions'/>
        <NavLink icon={<LuChartNoAxesCombined/>} text='Analytics'/>
        <NavLink icon={<LuWallet/>} text='Budgets'/>
        <NavLink icon={<LuTarget/>} text='Goals'/>
        <NavLink icon={<LuSettings/>} text='Settings'/>
  </div>
    </nav>
  );
};

export default Nav;
