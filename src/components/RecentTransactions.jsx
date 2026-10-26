import { useStoreState } from "easy-peasy";
import RecentTransRow from "./RecentTransRow";
import { Link } from "react-router";
const RecentTransactions = () => {
  const recentTrans = useStoreState((state) => state.recentTransactions);
  return (
    <div className="bg-CARD-BG grow-2 border-BORDER  rounded-lg border">
      <div className="flex flex-row justify-between p-4">
        <h3 className="font-bold">Recent Transactions</h3>
        <Link
          className="text-green-500 hover:underline hover:decoration-1"
          to="transactions"
        >
          {"View all ›"}
        </Link>
      </div>
      {recentTrans.map((trans) => (
        <RecentTransRow key={trans.id} trans={trans} />
      ))}
    </div>
  );
};

export default RecentTransactions;
