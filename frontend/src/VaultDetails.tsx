import React from "react";
import { useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import { useGetVaultDetails } from "./hooks";

const VaultDetails = () => {
  const { account } = useEthers();
  const { balance, unlockTime } = useGetVaultDetails();

  if (account && balance && unlockTime && balance.gt(0)) {
    return (
      <div className="mt-10">
        <p>Stored Balance: {formatEther(balance)} </p>
        <p>Unlocks at: {unlockTime.toString()}</p>
      </div>
    );
  }

  return null;
};

export default VaultDetails;
