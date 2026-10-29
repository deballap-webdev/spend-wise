import { useStoreState } from "easy-peasy";
const ProgressBar = ({ color, category }) => {
  const percentage = useStoreState((state) => state.getPercentOfTotalExpense);
  const getTotalForCategory = useStoreState(state => state.getTotalForCategory)
  const amount = getTotalForCategory(category.toLowerCase())
  const symbol = useStoreState(state => state.symbol)
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="rounded-[50%] w-2 h-2" style={{ backgroundColor: `${color}` }}></div>
          <div className="text-[0.8rem]">{category}</div>
        </div>

        <div className="font-bold text-[0.7rem]">{symbol}{amount.toLocaleString()}</div>
      </div>
      <div className="bg-RANGE-BG h-2 w-full rounded-lg">
        <div
          style={{
            width: `${percentage(`${category.toLowerCase()}`)}%`,
            backgroundColor: `${color}`,
          }}
          className="h-2 rounded-lg"
        ></div>
      </div>

    </div>
  );
};

export default ProgressBar;
