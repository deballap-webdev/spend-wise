import useActiveComponent from "../hooks/useActiveOutlet";
import Preferences from "../components/Preferences";
const Settings = () => {
  useActiveComponent('Settings')
  return <main className="bg-BODY-BG grow">
    <h2>Settings</h2>
    <Preferences />
  </main>;
};

export default Settings;
