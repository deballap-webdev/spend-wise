import { useStoreState } from "easy-peasy";
import useActiveComponent from "../hooks/useActiveOutlet";
const goals = useStoreState(state => state.goals)

const Goals = () => {
  useActiveComponent('Goals')
  return <div className="grow bg-BODY-BG">
    <h2>Savings Goals</h2>
    <p>Big dreams. Small steps. Start building your future</p>
    <div>

    </div>

  </div>;
};

export default Goals;
