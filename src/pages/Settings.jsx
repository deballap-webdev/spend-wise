import useActiveComponent from "../hooks/useActiveOutlet";
const Settings = () => {
  useActiveComponent('Settings')
  return <div className="bg-BODY-BG grow">Settings</div>;
};

export default Settings;
