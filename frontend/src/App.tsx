import React from "react";

import Header from "./Header";
import VaultDetails from "./VaultDetails";
import VaultControls from "./VaultControls";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-red-50 h-full">
      <Header />
      <div className="flex flex-col h-full w-1/2 mx-auto my-0">
        <VaultDetails />
        <VaultControls />
      </div>
    </div>
  );
};

export default App;
