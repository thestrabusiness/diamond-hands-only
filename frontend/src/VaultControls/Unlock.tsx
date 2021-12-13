import React from "react";
import Button from "./Button";

import { useUnlockHoldings } from "../hooks";

const UnlockControls = () => {
  const { state, send: unlockHoldings } = useUnlockHoldings();

  const disabled = state.status === "Mining";

  const handleOnPressRetrieve = () => {
    unlockHoldings();
  };

  return (
    <Button
      onClick={handleOnPressRetrieve}
      disabled={disabled}
      label="Retrieve"
    />
  );
};

export default UnlockControls;
