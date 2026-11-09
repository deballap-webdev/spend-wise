import { LuX } from 'react-icons/lu'

const Xbutton = ({ closeFunc, disabled }) => {
    return (
        <button className="hover:bg-LIGHT-RED hover:text-red-500 focus:outline-1 focus:outline-red-500 justify-center items-center flex p-2 rounded-md cursor-pointer" type="button" onClick={closeFunc} disabled={disabled}><LuX /></button>
    )
}

export default Xbutton