import useActiveComponent from "../hooks/useActiveOutlet";
import Preferences from "../components/Preferences";
import DangerZone from "../components/DangerZone";
const Settings = () => {
  useActiveComponent("Settings");
  return (
    <main className="bg-BODY-BG grow px-12 py-3 flex flex-col gap-4">
      <h2 className="text-[1.3rem] font-bold">Settings</h2>
      <p className="text-[0.8rem] text-LIGHT-TEXT -mt-3">Make your workspace feel like you</p>
      <Preferences />
      <DangerZone />
    </main>
  );
};

export default Settings;
