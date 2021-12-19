import React, { FC } from "react";
import Button from "./Button";

import { useUnlockHoldings } from "../hooks";
import { BigNumber } from "ethers";

interface UnlockButtonProps {
  unlockTimePosix: BigNumber;
}

const UnlockButton: FC<UnlockButtonProps> = ({ unlockTimePosix }) => {
  const { state, send: unlockHoldings } = useUnlockHoldings();
  const currentTime = (new Date().getTime() / 1000).toFixed(0);

  const disabled = state.status === "Mining" || unlockTimePosix.gt(currentTime);

  const handleOnPressRetrieve = () => {
    unlockHoldings();
  };

  return (
    <Button
      onClick={handleOnPressRetrieve}
      disabled={disabled}
      transactionStatus={state.status}
      label="Retrieve"
    />
  );
};

export default UnlockButton;
