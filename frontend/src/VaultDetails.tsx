import React from "react";
import { ethers } from "ethers";
import { useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import { useGetVaultDetails } from "./hooks";

const VaultDetails = () => {
  const { account } = useEthers();
  const vaultDetails = useGetVaultDetails();

  let balance: ethers.BigNumber = ethers.BigNumber.from(0);
  let timeRemaining: ethers.BigNumber = ethers.BigNumber.from(0);

  if (vaultDetails) {
    [balance, timeRemaining] = vaultDetails;
    console.log({ balance, timeRemaining });
  }

  if (account && balance && timeRemaining) {
    return (
      <div className="mt-10">
        <p>Stored Balance: {formatEther(balance)} </p>
        <p>Time remaining: {timeRemaining.toNumber()} </p>
      </div>
    );
  }

  return null;
};

export default VaultDetails;
