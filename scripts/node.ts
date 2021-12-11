import hre, { ethers } from "hardhat";
import MultiCallABI from "@usedapp/core/src/constants/abi/MultiCall.json";

import setEnvValue from "./helpers/setEnvValue";

const main = async () => {
  hre.run("node");

  const Multicall = await ethers.getContractFactory(
    MultiCallABI.abi,
    MultiCallABI.bytecode
  );
  const multicall = await Multicall.deploy();
  await multicall.deployed();

  console.log("Multicall deployed to:", multicall.address);
  setEnvValue("REACT_APP_MULTICALL_ADDRESS", multicall.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
