import useActiveComponent from "../hooks/useActiveOutlet";
import SummaryCardWrapper from "../components/SummaryCardWrapper";
import RecentTransactions from "../components/RecentTransactions";
import ExpenseSummary from "../components/ExpenseSummary";
import BarChart from "../components/BarChart";
import { Link } from "react-router";
import GoalCard from "../components/GoalCard"
import { useStoreState } from "easy-peasy";
const Dashboard = () => {
  const goals = useStoreState(state => state.targets.goals)
  useActiveComponent("Dashboard");
  return (
    <main className="bg-BODY-BG flex flex-col gap-4 px-4 pt-4 pb-12">
      <h2>Your money, at a glance.</h2>
      <SummaryCardWrapper />
      <div className="flex gap-3 flex-wrap">
        <RecentTransactions />
        <div className="relative grow basis-0 min-w-fit">
          <Link to="analytics" className="hover:bg-LIGHT-GREEN h-8 w-8 flex items-center justify-center rounded-md  absolute right-1.5 top-4">•••</Link>
          <ExpenseSummary />
        </div>
      </div>
      <div className="flex gap-3 flex-wrap" >
        <div className="grow-2 basis-0 min-w-200px">
          <BarChart />
        </div>
        {goals.length && <div className="grow basis-0">
          <GoalCard goal={goals[0]} /> </div>}
      </div>
    </main>
  );
};

export default Dashboard;
