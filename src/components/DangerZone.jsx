import { useState } from "react"
import ClearAll from "./modals/ClearAll"
const DangerZone = () => {
    const [isClearAllOpen, setIsClearAllOpen] = useState(false)
    return (
        <div className=" bg-CARD-BG rounded-md border border-BORDER max-w-200">
            <p className="font-bold text-red-500 border-b border-BORDER p-3">Danger Zone</p>
            <div className="p-3 flex items-center justify-between">
                <div>
                    <p className="font-bold">Clear All Data</p>
                    <p className="text-[0.7rem] text-LIGHT-TEXT">Permanetly remove all transactions, budgets, and savings progress from this session</p>
                </div>
                <button className="text-white text-nowrap bg-red-600 px-2 py-0.5 rounded-md hover:filter hover:brightness-110 cursor-pointer" onClick={() => setIsClearAllOpen(true)}>Clear all</button>
            </div>
            {isClearAllOpen && <ClearAll setIsClearAllOpen={setIsClearAllOpen} />}
        </div>
    )
}

export default DangerZone