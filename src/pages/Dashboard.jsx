
import useActiveComponent from "../hooks/useActiveOutlet";
import SummaryCardWrapper from "../components/SummaryCardWrapper";
import RecentTransactions from "../components/RecentTransactions";
import ExpenseSummary from "../components/ExpenseSummary";
const Dashboard = () => {
  useActiveComponent('Dashboard')

  return (<main className="bg-BODY-BG grow p-4 flex flex-col gap-4">
    <h2>Your money, at a glance.</h2>
    <SummaryCardWrapper />
    <RecentTransactions />
    <ExpenseSummary />
  </main>);
};

export default Dashboard;
