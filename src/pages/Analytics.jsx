import useActiveComponent from "../hooks/useActiveOutlet";
import SummaryCardWrapper from "../components/SummaryCardWrapper";
import BarChart from "../components/BarChart";
import ExpenseSummary from "../components/ExpenseSummary"
const Analytics = () => {
  useActiveComponent("Analytics");
  return (
    <main className="bg-BODY-BG grow p-4 flex flex-col gap-4">
      <SummaryCardWrapper />
      <BarChart />
      <ExpenseSummary />
    </main>
  );
};

export default Analytics;
