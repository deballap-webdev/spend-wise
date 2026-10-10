import { createStore, action, computed } from "easy-peasy";

export default createStore({
  isCollapsed: false,
  setIsCollapsed: action((state, payload) => {
    state.isCollapsed = payload;
  }),
  activeOutlet: "Dashboard",
  setActiveOutlet: action((state, payload) => {
    state.activeOutlet = payload;
  }),
});
