import { useStoreState } from "easy-peasy"
import { LuSearch } from "react-icons/lu"

const Header = () => {
    const outlet = useStoreState((state => state.activeOutlet))
  return (
    <div className="flex flex-row w-full items-center justify-between">
            <p>{`Workspace > ${outlet}`} </p>
    <LuSearch/>
    </div>
  )
}

export default Header