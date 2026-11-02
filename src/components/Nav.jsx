import {
  LuTrendingUp,
  LuLayoutDashboard,
  LuArrowLeftRight,
  LuWallet,
  LuTarget,
  LuSettings,
  LuCircleHelp,
  LuChartNoAxesCombined,
  LuX,
  LuArrowLeft
} from "react-icons/lu";
import NavLink from "./NavLink";
import { useStoreActions, useStoreState } from "easy-peasy";
const Nav = () => {
  const isCollapsed = useStoreState(state => state.isCollapsed)
  const setIsCollapsed = useStoreActions(actions => actions.setIsCollapsed)
  return (
    <div className="sticky top-0 left-0 h-fit z-30">
      <nav className="sm:flex hidden bg-NAV-BG  min-h-screen w-fit flex-col justify-between px-3 py-4  relative  ">
        <div className="justify-startflex flex-col items-center gap-1">
          <div className="mb-2 flex h-20 items-center  text-white gap-4">
            <div className="flex items-center gap-2">
              <LuTrendingUp className="h-10 w-15 rounded-lg bg-green-800 p-2 text-white" />
              {!isCollapsed && <p className="text-[1.3rem] font-bold">SpendWise</p>}
            </div>
            <button className="text-xl h-12 w-12  place-content-center rounded-md cursor-pointer hidden md:grid "><LuX /></button>
          </div>
          <div>
            {!isCollapsed && <h3 className="text-LIGHT-TEXT mb-4 w-full px-4 text-[0.8rem]">
              workspace
            </h3>}
            <NavLink icon={<LuLayoutDashboard />} text="Dashboard" path="/" />
            <NavLink
              icon={<LuArrowLeftRight />}
              text="Transactions"
              path="transactions"
            />
            <NavLink
              icon={<LuChartNoAxesCombined />}
              text="Analytics"
              path="analytics"
            />
            <NavLink icon={<LuWallet />} text="Budgets" path="budgets" />
            <NavLink icon={<LuTarget />} text="Goals" path="goals" />
            <NavLink icon={<LuSettings />} text="Settings" path="settings" />
          </div>
        </div>
        <div>
          <NavLink icon={<LuCircleHelp />} text="Help & Support" />
        </div>
        <button className="bg-white rounded-[50%] h-6 w-6 flex items-center justify-center  border border-BORDER absolute -right-4 top-18 cursor-button" onClick={() => setIsCollapsed(!isCollapsed)} style={{ rotate: isCollapsed ? "180deg" : null }}><LuArrowLeft title={isCollapsed ? "open nav-menu" : "close nav-menu"} /></button>
      </nav>

    </div>

  );
};

export default Nav;
