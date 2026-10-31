import useActiveComponent from "../hooks/useActiveOutlet";
import SummaryCardWrapper from "../components/SummaryCardWrapper";
import BarChart from "../components/BarChart";
const Analytics = () => {
  useActiveComponent("Analytics");
  return (
    <main className="bg-BODY-BG grow p-4">
      <SummaryCardWrapper />
      <BarChart />
    </main>
  );
};

export default Analytics;
