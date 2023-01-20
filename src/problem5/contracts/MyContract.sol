// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// npm install @openzeppelin/contracts
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

contract MyContract {
    // mapping of token contract addresses to their corresponding balance
    // mapping(address => uint256) public tokenBalance;
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    // function to retrieve all token balances given a wallet address and the token contract addresses
    function getBalances(address wallet, address[] memory tokens) public view returns (TokenBalance[] memory) {
        TokenBalance[] memory balances = new TokenBalance[](tokens.length);

        for (uint256 i = 0; i < tokens.length; i++) {
            uint256 balance = IERC20(tokens[i]).balanceOf(wallet);
            balances[i] = TokenBalance(tokens[i], balance);
        }

        return balances;
    }
}
