import React from "react";
import WalletConnector from "./WalletConnector";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 px-10">
      <div className="text-slate-800 text-5xl font-semibold justify-start self-center space-x-10">
        💎🔒
      </div>
      <WalletConnector />
    </div>
  );
};

export default Header;
