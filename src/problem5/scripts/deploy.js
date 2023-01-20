const hre = require('hardhat');

async function main() {
	// A convention to name Lock and contract factory to be the same
	const MyContract = await hre.ethers.getContractFactory('MyContract');
	// the second lock will be lowercase
	const myContract = await MyContract.deploy();

	await myContract.deployed();

	console.log(`Deployed to ${myContract.address}`);

	const contractBalance = await hre.ethers.provider.getBalance(myContract.address);
	console.log(`Balance: ${contractBalance}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
