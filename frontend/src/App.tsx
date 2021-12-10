import React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import "./App.css";

const App = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div>
      {!account && (
        <div>
          <button onClick={() => activateBrowserWallet()}>Connect</button>
        </div>
      )}
      {account && (
        <div>
          <button onClick={() => deactivate()}>Disconnect</button>
        </div>
      )}
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
    </div>
  );
};

export default App;
