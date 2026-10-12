import useActiveComponent from "../hooks/useActiveOutlet";
import SummaryCardWrapper from "../components/SummaryCardWrapper";
const Analytics = () => {
    useActiveComponent('Analytics')
    return <main className="bg-BODY-BG grow p-4">
        <SummaryCardWrapper />
    </main>;
};

export default Analytics;
