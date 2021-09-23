require("dotenv").config()
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3("https://eth-ropsten.alchemyapi.io/v2/RCEz8Ay2UEcyHAE5TA71YdgvHx4hW0VK")
const contract = require("../artifacts/contracts/myNFT.sol/MyNFT.json")
console.log(JSON.stringify(contract.abi))
