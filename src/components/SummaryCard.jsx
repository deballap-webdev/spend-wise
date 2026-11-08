import { useStoreState } from "easy-peasy";

const SummaryCard = ({ amount, icon, color, text, change }) => {
  const symbol = useStoreState(state => state.symbol)
  return (
    <div className="bg-CARD-BG border-BORDER flex h-40 grow flex-col justify-evenly rounded-md border p-2">
      <div className="flex flex-row items-center justify-between">
        <p className="text-[0.7rem]">{text}</p>
        {icon}
      </div>
      <p className="text-[1.2rem] font-bold" style={{ color: `${color}` }}>
        {amount}
      </p>
      {Number(change) && Number.isFinite(change) ? <p className={`text-[0.7rem] `}> <span className={`${change < 0 ? "text-red-600" : "text-GREEN"} font-bold`}>{change > 0 ? "+" : "-"}{symbol}{Math.abs(change)} </span>vs last month</p> : <p className="text-[0.8rem]">No data for pior month</p>}

    </div>
  );
};

export default SummaryCard;
