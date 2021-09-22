/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URL = "https://eth-ropsten.alchemyapi.io/v2/RCEz8Ay2UEcyHAE5TA71YdgvHx4hW0VK", PRIVATE_KEY = "669431b99d1e201385277d08ba001229d766215b4f14d8a02e3d1d9538d007bd"} = process.env;
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
    }
};
