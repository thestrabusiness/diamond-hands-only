import React from "react";
import { useEtherBalance, useEthers } from "@usedapp/core";

import { useGetVaultDetails } from "../hooks";
import Store from "./Store";
import Unlock from "./Unlock";

const VaultControls = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  let { balance, unlockTimePosix } = useGetVaultDetails(account);

  const Controls = () => {
    if (!account) {
      return null;
    }

    if (balance && balance.eq(0)) {
      return <Store currentBalance={etherBalance} />;
    }

    if (unlockTimePosix) {
      return <Unlock unlockTimePosix={unlockTimePosix} />;
    }

    return null;
  };

  return (
    <div>
      <Controls />
    </div>
  );
};

export default VaultControls;
