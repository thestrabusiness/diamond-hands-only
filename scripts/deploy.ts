// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const fs = require("fs");
const os = require("os");

const ENV_PATH = "./frontend/.env";

const setEnvValue = (key: string, value: string) => {
  // read file from hdd & split if from a linebreak to a array
  const ENV_VARS = fs.readFileSync(ENV_PATH, "utf8").split(os.EOL);

  // find the env we want based on the key
  const target = ENV_VARS.indexOf(
    ENV_VARS.find((line: string) => {
      return line.match(new RegExp(key));
    })
  );

  // replace the key/value with the new value
  ENV_VARS.splice(target, 1, `${key}=${value}`);

  // write everything back to the file system
  fs.writeFileSync(ENV_PATH, ENV_VARS.join(os.EOL));
};

const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  //
  // We get the contract to deploy
  const HodlVault = await ethers.getContractFactory("HodlVault");
  const hodlVault = await HodlVault.deploy();

  await hodlVault.deployed();

  console.log("HodlVault deployed to:", hodlVault.address);
  setEnvValue("REACT_APP_VAULT_CONTRACT_ADDRESS", hodlVault.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
