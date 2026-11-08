import useActiveComponent from "../hooks/useActiveOutlet";
import SummaryCardWrapper from "../components/SummaryCardWrapper";
import RecentTransactions from "../components/RecentTransactions";
import ExpenseSummary from "../components/ExpenseSummary";
import BarChart from "../components/BarChart";
import GoalCard from "../components/GoalCard"
import { useStoreState } from "easy-peasy";
const Dashboard = () => {
  const goals = useStoreState(state => state.targets.goals)
  useActiveComponent("Dashboard");
  return (
    <main className="bg-BODY-BG flex grow flex-col gap-4 p-4">
      <h2>Your money, at a glance.</h2>
      <SummaryCardWrapper />
      <div className="flex gap-3 flex-wrap">
        <RecentTransactions />
        <ExpenseSummary />
      </div>
      <div className="flex gap-3 flex-wrap">
        <BarChart />
      </div>
    </main>
  );
};

export default Dashboard;
