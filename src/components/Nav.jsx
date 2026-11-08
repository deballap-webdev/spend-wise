import {
  LuTrendingUp,
  LuLayoutDashboard,
  LuArrowLeftRight,
  LuWallet,
  LuTarget,
  LuSettings,
  LuChartNoAxesCombined,
  LuX,
  LuArrowLeft
} from "react-icons/lu";
import NavLink from "./NavLink";
import { useStoreActions, useStoreState } from "easy-peasy";
import useEscapeModal from "../hooks/useEscapeModal";
const Nav = () => {
  const isCollapsed = useStoreState(state => state.isCollapsed)
  const setIsCollapsed = useStoreActions(actions => actions.setIsCollapsed)
  const isNavOpen = useStoreState(state => state.isNavOpen)
  const setIsNavOpen = useStoreActions(actions => actions.setIsNavOpen)
  useEscapeModal(isNavOpen, setIsNavOpen)
  return (
    <div className={`fixed sm:sticky  top-0 left-0 h-screen z-30 w-screen bg-[rgba(60,68,80,0.6)] backdrop-blur-sm sm:bg-none sm:w-fit sm:backdrop-blur-none ${isNavOpen ? "flex" : "hidden sm:flex"}`} onClick={(e) => {
      if (e.target === e.currentTarget) setIsNavOpen(false)
    }}
    >
      <nav className={`bg-NAV-BG  min-h-screen w-fit flex-col justify-between px-3 py-4 sm:relative absolute ${isNavOpen ? "flex" : "hidden sm:flex"}`} >
        <div className="justify-start flex flex-col items-center gap-1">
          <div className="mb-2 flex h-20 items-center text-white gap-4">
            <div className="flex items-center gap-2">
              <LuTrendingUp className="h-10 w-15 rounded-lg bg-green-800 p-2 text-white" />
              {!isCollapsed && <p className="text-[1.3rem] font-bold">SpendWise</p>}
            </div>
            <button className="text-xl h-12 w-12  place-content-center rounded-md cursor-pointer grid sm:hidden " onClick={() => setIsNavOpen(false)}><LuX /></button>
          </div>
          <div className="self-start">
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

        <button className={`bg-white rounded-[50%] h-6 w-6 flex items-center justify-center  border border-BORDER absolute -right-4 top-18 cursor-button ${isCollapsed ? "rotate-180" : "rotate-0"}`} onClick={() => setIsCollapsed(!isCollapsed)} ><LuArrowLeft title={isCollapsed ? "open nav-menu" : "close nav-menu"} /></button>
      </nav>
    </div >

  );
};

export default Nav;
