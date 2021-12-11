import React from "react";
import { ethers } from "ethers";
import { useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import { useGetVaultDetails } from "./hooks";

const VaultDetails = () => {
  const { account } = useEthers();
  const vaultDetails = useGetVaultDetails();

  let balance: ethers.BigNumber = ethers.BigNumber.from(0);
  let unlockTime;

  if (vaultDetails) {
    let unlockTimePosix;
    [balance, unlockTimePosix] = vaultDetails;
    unlockTime = new Date(unlockTimePosix.toNumber() * 1000);
  }

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
