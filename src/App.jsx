import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";
import Budgets from "./pages/Budgets";
import Missing from "./components/Missing";
import useAxiosFetch from "./hooks/useAxiosFetch";
import Loading from "./components/empty/Loading";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
const App = () => {
  const { data: rates, isLoading, fetchError } = useAxiosFetch('https://api.frankfurter.dev/v2/rates?base=NGN&quotes=eur,usd')
  const setRates = useStoreActions(actions => actions.setRates)
  useEffect(() => {
    setRates(rates)
  }, [rates, setRates])

  return (
    <div className="min-h-screen w-full">
      {!isLoading && !fetchError && <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="goals" element={<Goals />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>}
      {
        isLoading && <Loading />
      }
    </div>
  );
};

export default App;
