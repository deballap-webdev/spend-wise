import { LuX } from "react-icons/lu";

const ClearAll = () => {
  return (
    <div className="backDrop flex flex-col gap-2">
      <div className="bg-BODY-BG w-100 rounded-md p-3">
        <div className="flex justify-between">
          <p className="font-bold">Clear all finance data?</p>
          <button>
            <LuX />
          </button>
        </div>

        <p className="text-LIGHT-TEXT text-[0.8rem]">
          This removes all transactions, budgets, and goal contributiond for
          this session. This cannot be undone
        </p>
        <div className="flex justify-end gap-2">
          <button className="border-DARK-GREEN hover:bg-GREEN rounded-md border px-2 py-1 text-[0.8rem] hover:text-white">
            Keep my data
          </button>
          <button className="rounded-md border bg-red-600 px-2 py-1 text-[0.8rem] text-white">
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearAll;
