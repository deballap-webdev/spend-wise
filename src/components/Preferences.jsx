import { useStoreState } from "easy-peasy";
import properCase from "../utils/properCase";
const Preferences = () => {
  const symbol = useStoreState((state) => state.symbol);
  const currency = useStoreState((state) => state.currency);
  return (
    <div className="bg-CARD-BG">
      <div>Preferences</div>
      <div>
        <div>
          <p>Currency Selection</p>
          <p>
            All SpendWise balances and transactions are shown in{" "}
            {properCase(currency)}
          </p>
        </div>
        <select
          name="currency"
          id="currency"
          className="border-BORDER w-fit rounded-md border p-2 text-[0.8rem] font-semibold"
        >
          <option value="">₦ — Nigerian Naira </option>
          <option value="">$ — United States Dollar</option>
          <option value="">€ — European Euro</option>
        </select>
      </div>
      <div>
        <div>
          <p>Dark / Light Mode</p>
          <p>A bright clean view of your finances</p>
        </div>
      </div>
      <div>
        <div>
          <p>Default Transaction Category</p>
          <p>Your starting category when adding a new transaction</p>
        </div>
        <select
          name="defaultCategory"
          id="defaultCategory"
          className="border-BORDER w-fit rounded-md border p-2 text-[0.8rem] font-semibold"
        >
          <option value="">Food</option>
          <option value="">Transport</option>
          <option value="">Bills</option>
          <option value="">Entertainment</option>
          <option value="">Income</option>
          <option value="">Shopping</option>
          <option value="">Health</option>
        </select>
      </div>
    </div>
  );
};

export default Preferences;
