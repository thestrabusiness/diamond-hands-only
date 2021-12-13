import * as fs from "fs";
import hre from "hardhat";
import MultiCallABI from "@usedapp/core/src/constants/abi/MultiCall.json";

import setEnvValue from "./helpers/setEnvValue";

const main = async () => {
  hre.run("compile");
  fs.copyFileSync(
    "./artifacts/contracts/HodlVault.sol/HodlVault.json",
    "./frontend/src/HodlVault.json"
  );
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
