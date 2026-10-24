import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Goals from "./pages/Goals";
import Settings from "./pages/Settings";
import Budgets from "./pages/Budgets";
import Missing from "./components/Missing";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="goals" element={<Goals />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
