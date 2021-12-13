import React from "react";
import { useEthers } from "@usedapp/core";

import { useGetVaultDetails } from "../hooks";
import Store from "./Store";
import Unlock from "./Unlock";

const VaultControls = () => {
  const { account } = useEthers();
  const currentTime = (new Date().getTime() / 1000).toFixed(0);
  let { balance, unlockTime } = useGetVaultDetails(account);

  const Controls = () => {
    if (!account) {
      return null;
    }

    if (balance && balance.eq(0)) {
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
