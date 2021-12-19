import React from "react";

import Header from "./Header";
import VaultDetails from "./VaultDetails";
import VaultControls from "./VaultControls";
import { useEthers } from "@usedapp/core";

const App = () => {
  const { account } = useEthers();

  return (
    <div className="bg-gradient-to-b from-red-200 to-slate-800 h-full">
      <Header />
      {account && (
        <div className="flex flex-col w-full max-w-md mx-auto my-0 pt-5">
          <div className="border border-slate-800 rounded-lg py-5 bg-slate-800 filter drop-shadow-lg text-white">
            <VaultDetails />
            <VaultControls />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
