import useActiveComponent from "../hooks/useActiveOutlet";
import SummaryCardWrapper from "../components/SummaryCardWrapper";
import RecentTransactions from "../components/RecentTransactions";
import ExpenseSummary from "../components/ExpenseSummary";
const Dashboard = () => {
  useActiveComponent("Dashboard");

  return (
    <main className="bg-BODY-BG flex grow flex-col gap-4 p-4">
      <h2>Your money, at a glance.</h2>
      <SummaryCardWrapper />
      <div className="flex gap-3 flex-wrap">
        <RecentTransactions />
        <ExpenseSummary />

      </div>
    </main>
  );
};

export default Dashboard;
