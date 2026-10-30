const SummaryCard = ({ amount, icon, color, text, percentChange }) => {
  return (
    <div className="bg-CARD-BG border-BORDER flex h-40 grow flex-col justify-evenly rounded-md border p-2">
      <div className="flex flex-row items-center justify-between">

        <p className="text-[0.7rem]">{text}</p>
        {icon}
      </div>
      <p className="text-[1.2rem] font-bold" style={{ color: `${color}` }}>
        {amount}
      </p>
      <p className="text-[0.7rem]">{percentChange} vs last month</p>
    </div>
  );
};

export default SummaryCard;
3