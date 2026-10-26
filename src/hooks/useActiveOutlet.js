import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";

const useActiveComponent = (outlet) => {
  const setActiveOutlet = useStoreActions((actions) => actions.setActiveOutlet);
  useEffect(() => {
    setActiveOutlet(outlet);
    return () => {
      setActiveOutlet(null);
    };
  }, [outlet, setActiveOutlet]);
};

export default useActiveComponent;
