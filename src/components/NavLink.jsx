import { Link } from "react-router";
import { useStoreActions, useStoreState } from "easy-peasy";
const NavLink = ({ icon, text, path }) => {
  const activeOutlet = useStoreState((state) => state.activeOutlet);
  const styleObj =
    activeOutlet === text
      ? { backgroundColor: "#009464", color: "#fff" }
      : null;
  const isCollapsed = useStoreState(state => state.isCollapsed)
  const setIsNavOpen = useStoreActions(actions => actions.setIsNavOpen)
  return (
    <Link
      to={path}
      className="text-LIGHT-TEXT hover:bg-NAV-HOVER flex min-h-8 w-full flex-row items-center gap-2 rounded-lg px-4 py-2 hover:text-white"
      style={styleObj}
      title={text}
      onClick={() => setIsNavOpen(false)}
    >
      {icon}
      {!isCollapsed && <p>{text}</p>}
    </Link>
  );
};

export default NavLink;
