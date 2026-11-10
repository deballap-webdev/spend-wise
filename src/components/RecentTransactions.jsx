import { useStoreState } from "easy-peasy";
import RecentTransRow from "./RecentTransRow";
import { Link } from "react-router";
const RecentTransactions = () => {
  const recentTrans = useStoreState((state) => state.recentTransactions);
  return (
    <div className="bg-CARD-BG grow-2 border-BORDER basis-0 min-w-fit rounded-lg border">
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
      {
        recentTrans.length === 0 && <p className="text-LIGHT-TEXT text-center text-[clamp(2vh,1rem,2.5vh)] mt-8">No transactions yet.</p>
      }
    </div>
  );
};

export default RecentTransactions;
