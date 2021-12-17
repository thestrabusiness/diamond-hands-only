// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import * as fs from "fs";
import { ethers } from "hardhat";

import setEnvValue from "./helpers/setEnvValue";

const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  //
  // We get the contract to deploy
  const DiamondVault = await ethers.getContractFactory("DiamondVault");
  const diamondVault = await DiamondVault.deploy();

  await diamondVault.deployed();

  console.log("DiamondVault deployed to:", diamondVault.address);
  setEnvValue("REACT_APP_VAULT_CONTRACT_ADDRESS", diamondVault.address);
  fs.copyFileSync(
    "./artifacts/contracts/DiamondVault.sol/DiamondVault.json",
    "./frontend/src/DiamondVault.json"
  );
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
