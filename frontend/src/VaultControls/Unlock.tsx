import React, { FC } from "react";
import Button from "./Button";

import { useUnlockHoldings } from "../hooks";
import { BigNumber } from "ethers";

interface UnlockControlsProps {
  unlockTimePosix: BigNumber;
}

const UnlockControls: FC<UnlockControlsProps> = ({ unlockTimePosix }) => {
  const { state, send: unlockHoldings } = useUnlockHoldings();
  const currentTime = (new Date().getTime() / 1000).toFixed(0);

  const disabled = state.status === "Mining" || unlockTimePosix.gt(currentTime);

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
