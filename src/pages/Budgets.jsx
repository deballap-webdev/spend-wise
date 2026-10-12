import useActiveComponent from "../hooks/useActiveOutlet";
const Budgets = () => {
  useActiveComponent("Budgets")
  return <div className="bg-BODY-BG grow">Budgets</div>;
};

export default Budgets;
