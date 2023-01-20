const { ethers } = require('ethers');

const ADDR = '0x610178da211fef7d417bc0e6fed39f05609ad788'; // your contract address
const ABI = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'wallet',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'tokens',
				type: 'address[]',
			},
		],
		name: 'getBalances',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'tokenAddress',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'tokenAmount',
						type: 'uint256',
					},
				],
				internalType: 'struct MyContract.TokenBalance[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
]; // your contract ABI

const ADDRESS = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0'; // some wallet address with token balance
const TOKENS = [
	// token contract addresses
	'0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0',
];

// you can use your own RPC provider url (no need to deploy to mainnet)
// Question: what is RPC?
// Did i code correctly? logically i should be able to get the balances of the tokens in a wallet
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

	const balances = await contract.getBalances(ADDRESS, TOKENS);
	return balances;
};

test().then(console.log);
