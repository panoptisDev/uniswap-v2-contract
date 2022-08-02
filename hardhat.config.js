require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: "./envs/hardhat.env" });
const {HardhatUserConfig} = require('hardhat/types');
require('hardhat-deploy');

const RINKEBY_API_KEY_URL = process.env.RINKEBY_API_KEY_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

const ROPSTEN_API_KEY_URL = process.env.ROPSTEN_API_KEY_URL;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;

const POLYGON_API_KEY_URL = process.env.POLYGON_API_KEY_URL;
const POLYGON_PRIVATE_KEY = process.env.POLYGON_PRIVATE_KEY;

const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    compilers: [
    {
      version:"0.7.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    {
      version:"0.5.16",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    {
      version:"0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
  ]
  },
  networks: {
    hardhat:{
      forking:{
        url:"https://eth-mainnet.g.alchemy.com/v2/yFuc57hqAlpesQvg-rQDP3yvfZOG5F9r"
      }
    },
    rinkeby:{
      url: RINKEBY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
    ropsten:{
      url: ROPSTEN_API_KEY_URL,
      accounts: [ROPSTEN_PRIVATE_KEY],
    },
    polygon:{
      url: POLYGON_API_KEY_URL,
      accounts: [POLYGON_PRIVATE_KEY],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey:ETHERSCAN_KEY,
  },
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};