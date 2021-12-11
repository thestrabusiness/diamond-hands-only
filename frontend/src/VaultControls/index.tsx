import React from "react";
import { ethers } from "ethers";
import { useEthers } from "@usedapp/core";

import { useGetVaultDetails } from "../hooks";
import Store from "./Store";
import Unlock from "./Unlock";

const VaultControls = () => {
  const { account } = useEthers();
  const currentTime = (new Date().getTime() / 1000).toFixed(0);
  let unlockTime: ethers.BigNumber;
  let storedAmount: ethers.BigNumber;
  let vaultDetails = useGetVaultDetails();

  if (vaultDetails) {
    [storedAmount, unlockTime] = vaultDetails;
  }

  const Controls = () => {
    if (!account) {
      return null;
    }

    if (storedAmount && storedAmount.eq(0)) {
      return <Store />;
    }

    if (unlockTime && unlockTime.lte(currentTime)) {
      return <Unlock />;
    }

    return null;
  };

  return (
    <div className="mt-10">
      <Controls />
    </div>
  );
};

export default VaultControls;
