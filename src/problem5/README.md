# Problem statement

Deploy a utility EVM contract with a function to retrieve all token balances given a wallet address and the token contract addresses.

How your contract will be tested:
`./test.js`

```
const { ethers } = require("ethers");

const ADDR = "…";   // your contract address
const ABI = […];    // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"…",
	"…",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);

	return balances;
};

test().then(console.log);
```

# Expected output

The output should be organized as one `token amount` per object.

```
[
  {
    token: "0x123d475e13aa54a43a7421d94caa4459da021c77",
    balance: "9988887462734227" // its okay if this is typed ethers.BigNumber
  },
  {
    token: "0x55f6823de9642f47e80ed4845a55aa8430cb4ec6",
    balance: "899998285714286"
  },
  …
]
```

# Thought process

I have close to no knowledge on the current state of the blockchain and solidity. So I will use this challenge as a way to learn solidity and document my questions or "discovery".

## Truffle or hardhat

Looking at the hint, it prompted me that solidity can be used by frameworks such as truffle and hardhat. They assists with the creation of the smart contract. Comparing between the two frameworks, I decided to choose hardhat because Hardhat is flexible and can deploy its own mock network locally. Truffle requires some extra steps.

## How to start with hardhat

To start with hardhat, it is just like any other JavaScript framework and it can be installed with npm. It was not as complicated as I initally thought. Moreover, hardhat feels more beginner friendly with all the requirements of the environment being suggested.

### Config - network

By default, the network is hardhat. We can set the ```defaultNetwork``` though. 

There are two kinds of networks in hardhat:
1. JSON-RPC based-networks
JSON-RPC based networks stands for remote procedure call protocol. It is just a different defined network.

2. built-in hardhat network
A local ethereum network node designed for development. It uses all of hardhat's plugins (ether.js, web3.js etc)

## Lost

ERC20 is a standard for token exchange. But how do I access the account's wallet or token?

# Commands

```
npm init -y
npm install -D hardhat

npx hardhat
// say y to the dependencies to install testing and interactions with smart contracts

npx hardhat accounts

npx hardhat compile
// compile creates artifacts to interact with smart contracts

npx hardhat test
// runs the test script

npx hardhat run scripts/sample-script.js
// run deployment script

npx hardhat node
// We can see our nodes
```
