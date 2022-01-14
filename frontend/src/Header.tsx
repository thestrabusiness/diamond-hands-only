import React from "react";
import WalletConnector from "./WalletConnector";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 px-10">
      <div className="w-52" />
      <div className="text-3xl font-semibold justify-start self-center space-x-10">
        Diamond Hands Only
      </div>
      <WalletConnector />
    </div>
  );
};

export default Header;
