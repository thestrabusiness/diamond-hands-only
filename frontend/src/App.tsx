import React from "react";

import Header from "./Header";
import VaultControls from "./VaultControls";
import { useEthers } from "@usedapp/core";

const App = () => {
  const { account } = useEthers();

  return (
    <div className="bg-gradient-to-b from-red-200 to-slate-800 h-full">
      <Header />
      {account && <VaultControls />}
    </div>
  );
};

export default App;
