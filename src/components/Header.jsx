import { useStoreState } from "easy-peasy";
import { LuSearch } from "react-icons/lu";

const Header = () => {
  const outlet = useStoreState((state) => state.activeOutlet);
  return (
    <header className="border-b-BORDER sticky top-0 z-10 flex w-full flex-row items-center justify-between border-b bg-white p-4 text-[clamp(1vh_0.7rem_1.5vh)]">
      <p>{`Workspace > ${outlet}`} </p>
      <LuSearch />
    </header>
  );
};

export default Header;
