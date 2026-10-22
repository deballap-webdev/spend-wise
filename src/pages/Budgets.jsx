import useActiveComponent from "../hooks/useActiveOutlet";
const Budgets = () => {
  useActiveComponent("Budgets")
  return <div className="bg-BODY-BG grow">
    <h2>Monthly Budgets</h2>
    <p>Stay on top of your spending</p>
  </div>;
};

export default Budgets;
