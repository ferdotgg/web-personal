import { useState } from "react";

const useDrawer = () => {
  const [typeDrawer, setTypeDrawer] = useState("");
  const [positionDrawer, setPositionDrawer] = useState("");
  const [drawer, setDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (positionDrawer, open, type) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer({ ...drawer, [positionDrawer]: open });
    setPositionDrawer(positionDrawer);
    setTypeDrawer(type);
  };

  return {
    setDrawer,
    toggleDrawer,
    positionDrawer,
    typeDrawer,
    drawer,
  };
};

export default useDrawer;
