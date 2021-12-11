import React from "react";
import { useEthers } from "@usedapp/core";

const Header = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();

  const button = account
    ? { label: "Disconnect", onClick: deactivate }
    : {
        label: "Connect Wallet",
        onClick: activateBrowserWallet,
      };

  return (
    <div className="flex justify-between items-center py-5 px-10">
      <div className="w-24" />
      <div className="text-3xl font-semibold justify-start self-center space-x-10">
        Diamond Hands Only
      </div>
      <div className="text-xl self-center px-5 py-3 border border-gray-400 rounded-full">
        <button onClick={() => button.onClick()}>{button.label}</button>
      </div>
    </div>
  );
};

export default Header;
