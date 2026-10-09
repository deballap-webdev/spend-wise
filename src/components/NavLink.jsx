
const NavLink = ({icon, text}) => {
  return (
    <div className="text-white w-full flex flex-row items-center gap-2 bg-green-600 min-h-8 px-4 py-2 rounded-lg">
     {icon}
     <p>{text}</p>
    </div>
  )
}

export default NavLink