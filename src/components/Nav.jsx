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
    <nav className="bg-NAV-BG flex min-h-screen w-fit flex-col justify-between px-3 py-4">
      <div className="justify-startflex flex-col items-center gap-1">
        <div className="mb-2 flex h-20 items-center gap-1 text-white">
          <LuTrendingUp className="h-10 w-15 rounded-lg bg-green-800 p-2 text-white" />
          <p className="text-[1.3rem] font-bold">SpendWise</p>
        </div>
        <div>
          <h3 className="text-LIGHT-TEXT mb-4 w-full px-4 text-[0.8rem]">
            workspace
          </h3>
          <NavLink icon={<LuLayoutDashboard />} text="Dashboard" path="/" />
          <NavLink icon={<LuArrowLeftRight />} text="Transactions" path="transactions" />
          <NavLink icon={<LuChartNoAxesCombined />} text="Analytics" path="analytics" />
          <NavLink icon={<LuWallet />} text="Budgets" path="budgets" />
          <NavLink icon={<LuTarget />} text="Goals" path="goals" />
          <NavLink icon={<LuSettings />} text="Settings" path="settings" />
        </div>
      </div>
      <div>
        <NavLink icon={<LuCircleHelp />} text="Help & Support" />
      </div>
    </nav>
  );
};

export default Nav;
