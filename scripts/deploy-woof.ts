import { ethers, network } from "hardhat";

const currentNetwork = network.name;

async function main() {
  if (currentNetwork == "mainnet") {
    if (!process.env.KEY_MAINNET) {
      throw new Error("Missing private key, refer to README 'Deployment' section");
    }
    // if (
    //   !config.Admin[currentNetwork] ||
    //   config.Admin[currentNetwork] === "0x0000000000000000000000000000000000000000"
    // ) {
    //   throw new Error("Missing admin address, refer to README 'Deployment' section");
    // }
  }
  const woofAddress = "0x5c44d3d2312aba4d5f2406a98bf374bc76455092";
  const cakeAddress = woofAddress;
  const [deployer] = await ethers.getSigners();

  console.log('deployer address = ', deployer.address);
  console.log("Deploying to network:", currentNetwork);
  console.log("Deploying WoofChef...");

  const WoofChef = await ethers.getContractFactory("WoofChef");
  const woofChef = await WoofChef.deploy(woofAddress, deployer.address, cakeAddress);

  console.log("WoofChef deployed to:", woofChef.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
