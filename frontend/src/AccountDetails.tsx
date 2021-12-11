import React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const AccountDetails = () => {
  const { account } = useEthers();

  const etherBalance = useEtherBalance(account);

  if (account && etherBalance) {
    return (
      <div>
        <p>Account: {account}</p>
        <p>Balance: {formatEther(etherBalance)}</p>
      </div>
    );
  }

  return null;
};

export default AccountDetails;
