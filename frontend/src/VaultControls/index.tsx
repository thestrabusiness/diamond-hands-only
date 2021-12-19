import React from "react";
import { useEtherBalance, useEthers } from "@usedapp/core";

import { useGetVaultDetails } from "../hooks";
import Store from "./Store";
import Unlock from "./Unlock";

const VaultControls = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const { balance, unlockTimePosix } = useGetVaultDetails(account);

  console.log(balance);

  const Controls = () => {
    if (!account || !balance || !unlockTimePosix) {
      return null;
    }

    if (balance.eq(0)) {
      return <Store currentBalance={etherBalance} />;
    }

    if (balance.gt(0)) {
      return <Unlock balance={balance} unlockTimePosix={unlockTimePosix} />;
    }

    return null;
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto my-0 pt-5">
      <div className="border border-slate-800 rounded-lg py-5 bg-slate-800 filter drop-shadow-lg text-white">
        <Controls />
      </div>
    </div>
  );
};

export default VaultControls;
