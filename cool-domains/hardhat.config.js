require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

ALCHEMY_MUMBAI_URL = process.env.ALCHEMY_MUMBAI_URL;
WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: ALCHEMY_MUMBAI_URL,
      accounts: [WALLET_PRIVATE_KEY],
    }
  },
};