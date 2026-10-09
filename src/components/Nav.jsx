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
import { useStoreState } from "easy-peasy";
import NavLink from "./NavLink";
const Nav = () => {
  return (
    <nav className="flex py-4 px-3 w-fit items-center bg-black h-screen flex-col gap-1">
      <div className="text-white flex h-20 items-center gap-2"><LuTrendingUp className="text-white bg-green-800  w-10 h-10 p-2 rounded-lg"/> 
      <p>Spend Wise</p></div>
<NavLink icon={useStoreState(state => state.dashboardIcon)} text='Dashboard'/>
<NavLink icon={useStoreState(state => state.transactionsIcon)} text='Transactions'/>
<NavLink icon={useStoreState(state => state.analyticsIcon)} text='Analytics'/>
<NavLink icon={useStoreState(state => state.walletIcon)} text='Budgets'/>
<NavLink icon={useStoreState(state => state.goalsIcon)} text='Goals'/>
<NavLink icon={useStoreState(state => state.settingsIcon)} text='Settings'/>
  
    </nav>
  );
};

export default Nav;
