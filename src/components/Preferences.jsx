import { useStoreState } from "easy-peasy";
import properCase from "../utils/properCase";
import Select from "./Select";
const Preferences = () => {
  const symbol = useStoreState((state) => state.symbol);
  const currency = useStoreState((state) => state.settings.currency);
  const currencyArray = [{ value: "nigerian naira", label: "₦ — Nigerian Naira" }, { value: "european euro", label: "€ — European Euro" }, { value: "united states dollar", label: "$ — United States Dollar" }]
  const categoryArray = useStoreState(state => state.categoryArray)
  return (
    <div className="bg-CARD-BG  rounded-md border border-BORDER">
      <div className="font-bold border-b border-b-BORDER p-3">Preferences</div>
      <div className="border-b border-b-BORDER flex items-center p-3 justify-between gap-2">
        <div>
          <p className="font-bold">Currency Selection</p>
          <p className="text-[0.7rem] text-LIGHT-TEXT">
            All SpendWise balances and transactions are shown in
            {properCase(currency)}
          </p>
        </div>
        <div>
          <Select options={currencyArray} />
        </div>
      </div>
      <div className="p-3 border-b border-b-BORDER">
        <div >
          <p className="font-bold">Dark / Light Mode</p>
          <p className="text-[0.7rem] text-LIGHT-TEXT">A bright clean view of your finances</p>
        </div>
      </div>
      <div className="p-3 flex justify-between gap-2">
        <div>
          <p className="font-bold">Default Transaction Category</p>
          <p className="text-[0.7rem] text-LIGHT-TEXT">Your starting category when adding a new transaction</p>
        </div>
        <div>
          <Select options={categoryArray} />
        </div>
      </div>
    </div>
  );
};

export default Preferences;
