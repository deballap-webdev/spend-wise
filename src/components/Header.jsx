import { useStoreState } from "easy-peasy";
import { LuSearch } from "react-icons/lu";

const Header = () => {
  const outlet = useStoreState((state) => state.activeOutlet);
  return (
    <header className="flex p-4 border-b-BORDER border-b w-full flex-row items-center justify-between text-[clamp(1vh_0.7rem_1.5vh)] sticky top-0 z-10 bg-white">
      <p>{`Workspace > ${outlet}`} </p>
      <LuSearch />
    </header>
  );
};

export default Header;
