import { LuX } from "react-icons/lu"

const ClearAll = () => {
    return (
        <div className="backDrop flex flex-col gap-2">
            <div className="bg-BODY-BG p-3 rounded-md w-100">
                <div className="flex justify-between ">
                    <p className="font-bold">Clear all finance data?</p>
                    <button><LuX /></button>
                </div>

                <p className="text-LIGHT-TEXT text-[0.8rem]">This removes all transactions, budgets, and goal contributiond for this session. This cannot be undone</p>
                <div className="flex justify-end gap-2 ">
                    <button className="border rounded-md border-DARK-GREEN hover:bg-GREEN hover:text-white px-2 py-1 text-[0.8rem]">Keep my data</button>
                    <button className="border rounded-md px-2 py-1 text-[0.8rem] text-white bg-red-600">Clear All Data</button>
                </div>

            </div>
        </div>
    )
}

export default ClearAll