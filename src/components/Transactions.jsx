import useActiveComponent from "../hooks/useActiveOutlet";
const Transactions = () => {
  useActiveComponent('Transactions')
  return <div className="bg-BODY-BG grow">Transactions</div>;
};

export default Transactions;
