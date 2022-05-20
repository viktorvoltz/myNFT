require("dotenv").config()
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3("https://eth-ropsten.alchemyapi.io/v2/RCEz8Ay2UEcyHAE5TA71YdgvHx4hW0VK")
const contract = require("../artifacts/contracts/myNFT.sol/MyNFT.json")

const contractAddress = "0x64ebbe661fd9f2d55fc9e941ebf75c49a62ff508"

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)


const PUBLIC_KEY = "0x0c46a5Fe94c48D643923146168Ad7b28Cd4B05e5";
const PRIVATE_KEY = process.env.API_URL;


async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');


  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction (
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log(" Promise failed:", err)
    })
}

mintNFT(
    "https://gateway.pinata.cloud/ipfs/QmUejeJfh359VxQhrWfuVWUkd6KpARWjYxSZPEEB8yVWUg"
)
