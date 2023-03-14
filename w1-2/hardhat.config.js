
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/f52d53f2715a4a52b137aa00df04db33`,
      accounts: ["408feafde91fcc1d368e1957a203b78cb89b968b2f132cb7bf5513f8adeef46a"]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "PE12W9XMRREBX4JU6QDC9XDNWC2A67TG53",
  },
  solidity: "0.8.18",
};
