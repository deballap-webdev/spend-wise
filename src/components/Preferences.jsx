import { useStoreActions, useStoreState } from "easy-peasy";
import Select from "./Select";
const Preferences = () => {
  const { currency } = useStoreState((state) => state.settings);
  const currencyArray = [{ value: "NGN", label: "₦ — Nigerian Naira" }, { value: "EUR", label: "€ — European Euro" }, { value: "USD", label: "$ — United States Dollar" }]
  const categoryArray = useStoreState(state => state.categoryArray)
  const isDark = useStoreState((state) => state.settings.isDark)
  const setIsDark = useStoreActions((actions) => actions.settings.setIsDark)
  return (
    <div className="bg-CARD-BG  rounded-md border border-BORDER max-w-200">
      <div className="font-bold border-b border-b-BORDER p-3">Preferences</div>
      <div className="border-b border-b-BORDER flex items-center p-3 justify-between gap-2">
        <div>
          <p className="font-bold">Currency Selection</p>
          <p className="text-[0.7rem] text-LIGHT-TEXT">
            All SpendWise balances and transactions are shown in {currency}
          </p>
        </div>
        <div>
          <Select options={currencyArray} />
        </div>
      </div>
      <div className="p-3 border-b border-b-BORDER flex justify-between items-center">
        <div >
          <p className="font-bold">Dark / Light Mode</p>
          <p className="text-[0.7rem] text-LIGHT-TEXT">A bright clean view of your finances</p>
        </div>
        <label for="toggleColorTheme" className="relative inline-block w-15 h-8.5 "  ><input type="checkbox" value="" className="sr-only peer" checked={isDark} id="toggleColorTheme" />
          <div className="absolute inset-0 bg-gray-300 rounded-[34px] h-8.5 w-15 transition-colors duration-400 peer-checked:bg-[#2196f3]">
          </div>
          <button className="absolute h-6.5 w-6.5 left-1 bottom-1 bg-white rounded-full transition-transform duration-400 peer-checked:translate-x-6.5 cursor-pointer" onClick={() => setIsDark(!isDark)} ></button>
        </label>
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
