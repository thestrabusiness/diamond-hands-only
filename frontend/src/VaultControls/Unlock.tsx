import React from "react";

import { useUnlockHoldings } from "../hooks";

const UnlockControls = () => {
  const { state, send: unlockHoldings } = useUnlockHoldings();

  const disabled = state.status === "Mining";

  const handleOnPressRetrieve = () => {
    unlockHoldings();
  };

  return (
    <button onClick={handleOnPressRetrieve} disabled={disabled}>
      Retrieve
    </button>
  );
};

export default UnlockControls;
