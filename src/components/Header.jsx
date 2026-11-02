import { useStoreState } from "easy-peasy";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const outlet = useStoreState((state) => state.activeOutlet);
  return (
    <header className="border-b-BORDER sticky top-0 z-10 flex w-full flex-row items-center gap-6 border-b bg-white p-4 text-[clamp(1vh_0.7rem_1.5vh)]">
      <button className="sm:hidden  cursor-pointer text-2xl  h-10 w-10 grid place-content-center rounded-md"><LuMenu /></button>
      <p>{`Workspace > ${outlet}`} </p>
    </header>
  );
};

export default Header;
