import useActiveComponent from "../hooks/useActiveOutlet";
const Goals = () => {
  useActiveComponent('Goals')
  return <div className="grow bg-BODY-BG">Goals</div>;
};

export default Goals;
