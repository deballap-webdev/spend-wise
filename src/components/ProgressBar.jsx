import { useStoreState } from "easy-peasy";

const ProgressBar = ({ color, category, amount }) => {
  const percentage = useStoreState((state) => state.getPercentOfTotalExpense);
  return (
    <div>
      <div>{category}</div>
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
