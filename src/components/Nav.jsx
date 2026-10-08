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
const Nav = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <LuTrendingUp />
      <LuLayoutDashboard />
      <LuArrowLeftRight />
      <LuChartNoAxesCombined />
      <LuWallet />
      <LuTarget />
      <LuSettings />
      <LuCircleHelp />
    </div>
  );
};

export default Nav;
