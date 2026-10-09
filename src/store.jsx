import { createStore,  action, computed } from "easy-peasy";
import {LuTrendingUp,
  LuLayoutDashboard,
  LuArrowLeftRight,
  LuWallet,
  LuTarget,
  LuSettings,
  LuCircleHelp,
  LuChartNoAxesCombined} from 'react-icons/lu'

export default createStore({
  helpIcon: <LuCircleHelp/>,
  dashboardIcon: <LuLayoutDashboard/>,
  transactionsIcon: <LuArrowLeftRight/>,
  walletIcon: <LuWallet/>,
  goalsIcon: <LuTarget/>,
  settingsIcon: <LuSettings/>,
  analyticsIcon: <LuChartNoAxesCombined/>,
  isCollapsed: false,
  setIsCollapsed: action((state, payload) => {
    state.isCollapsed = payload
  })
})