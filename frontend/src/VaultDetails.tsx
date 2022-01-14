import React from "react";
import { useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import { useGetVaultDetails } from "./hooks";

const DATE_FORMAT = {
  weekday: "long" as const,
  year: "numeric" as const,
  month: "long" as const,
  day: "numeric" as const,
  timeZoneName: "short" as const,
};

const VaultDetails = () => {
  const { account } = useEthers();
  const { balance, unlockTimePosix } = useGetVaultDetails(account);

  if (account && balance && unlockTimePosix && balance.gt(0)) {
    const unlockTime = new Date(
      unlockTimePosix.toNumber() * 1000
    ).toLocaleDateString("en-US", DATE_FORMAT);

    return (
      <div className="text-center mt-10">
        <div className="mb-5">
          <div className="text-3xl mb-2">Stored Balance</div>
          <div className="text-xl">{formatEther(balance)}</div>
        </div>
        <div className="mb-5">
          <div className="text-3xl mb-2">Unlocks at</div>
          <div className="text-xl">{unlockTime}</div>
        </div>
      </div>
    );
  }

  return null;
};

export default VaultDetails;
