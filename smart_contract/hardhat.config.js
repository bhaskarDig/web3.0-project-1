require('@nomiclabs/hardhat-waffle');
// require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goreli: {
      // url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      url:'https://eth-goerli.g.alchemy.com/v2/bI-1vbv7rc1s4cq5VhLA1itkoXM-ffDg',
      // accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
      accounts: [ '2614b8d91aca66ad19dc4950ef5fbdfddad2fa65e92d1fce3c3e44a2702a8711' ]
    },
  },
};