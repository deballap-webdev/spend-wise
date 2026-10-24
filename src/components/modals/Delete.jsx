import { LuTrash2, LuX } from "react-icons/lu";
const Delete = ({
  description,
  setIsDeleteOpen,
  deleteFunction,
  functionParam,
  headText,
}) => {
  return (
    <div
      className="backDrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsDeleteOpen(false);
      }}
    >
      <div className="bg-BODY-BG flex flex-col gap-3 rounded-md p-3">
        <div className="flex justify-between">
          <h3 className="font-bold">Delete {headText}?</h3>
          <button type="button" onClick={() => setIsDeleteOpen(false)}>
            <LuX />
          </button>
        </div>
        <p className="text-LIGHT-TEXT -mt-2 text-[0.8rem]">{`${description} will be removed from your workspace. This cannot be undone`}</p>

        <div className="flex justify-end gap-2">
          <button
            className="border-BORDER rounded-md border px-2 py-0.5"
            onClick={() => setIsDeleteOpen(false)}
          >
            Cancel
          </button>
          <button
            className="flex items-center gap-1 rounded-md bg-red-600 px-2 py-0.5 text-white"
            onClick={() => {
              deleteFunction(functionParam);
              setIsDeleteOpen(false);
            }}
          >
            <LuTrash2 />
            Delete Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
