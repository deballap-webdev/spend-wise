import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Analytics from "./components/Analytics";
import Goals from "./components/Goals";
import Settings from "./components/Settings";
import Budgets from "./components/Budgets";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="goals" element={<Goals />} />
          <Route path='settings' index element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
