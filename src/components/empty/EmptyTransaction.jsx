import { LuSearch } from "react-icons/lu";

const EmptyTransaction = () => {
  return (
    <div className="bg-CARD-BG flex w-full flex-col items-center justify-center gap-2 py-6">
      <LuSearch className="text-[1.5rem]" />
      <p className="font-bold">No transactions found</p>
      <p className="text-LIGHT-TEXT">
        Try a different seacrh add your first transaction
      </p>
    </div>
  );
};

export default EmptyTransaction;
