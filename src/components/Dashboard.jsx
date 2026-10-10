
import useActiveComponent from "../hooks/useActiveOutlet";
import SummaryCard from "./SummaryCard";
const Dashboard = () => {
  useActiveComponent('Dashboard')
  return (<div className="bg-BODY-BG grow">
    <h2>Your money, at a glance.</h2>
    <SummaryCard />
  </div>);
};

export default Dashboard;
