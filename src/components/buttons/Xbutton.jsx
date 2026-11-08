import { LuX } from 'react-icons/lu'

const Xbutton = ({ closeFunc }) => {
    return (
        <buttom className="hover:bg-LIGHT-RED" onClick={closeFunc}><LuX /></buttom>
    )
}

export default Xbutton