import {Link} from "react-router"
const NavLink = ({icon, text,path}) => {
  return (
    <div className="text-white w-full flex flex-row items-center gap-2  min-h-8 px-4 py-2 rounded-lg">
     {icon}
     <p>{text}</p>
    </div>
  )
}

export default NavLink