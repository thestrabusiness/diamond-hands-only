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
    <div className="flex flex-col">
      <Button
        onClick={handleOnPressRetrieve}
        disabled={disabled}
        label="Retrieve"
      />
    </div>
  );
};

export default UnlockControls;
