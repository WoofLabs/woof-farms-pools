import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-truffle5";
import "@nomicfoundation/hardhat-verify";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "dotenv/config";

// const bscTestnet: NetworkUserConfig = {
//   url: "https://rpc.coredao.org",
//   chainId: 1116,
//   accounts: [process.env.KEY_TESTNET!],
// };

const bscMainnet: NetworkUserConfig = {
  url: "https://rpc.coredao.org",
  chainId: 1116,
  accounts: [process.env.KEY_MAINNET!],
};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    // testnet: bscTestnet,
    mainnet: bscMainnet,
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 99999,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: false,
  },
  etherscan: {
    apiKey: {
      mainnet: "23813cc9de574e2c93b1982c3d776d33",
    },
    customChains: [
      {
        network: "mainnet",
        chainId: 1116,
        urls: {
          apiURL: "https://openapi.coredao.org/api/",
          browserURL: "https://scan.coredao.org/"
        }
      }
    ]
  },
};

export default config;
