//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HodlVault {
    struct Holding {
        uint256 amount;
        uint256 unlockTime;
    }

    mapping(address => Holding) private holdings;

    function storeHolding(uint256 _holdingPeriodInDays, uint256 _amount) public {
        uint256 _unlockTime = block.timestamp + (_holdingPeriodInDays * 1 days);
        Holding storage newHolding = holdings[msg.sender];
        newHolding.amount = _amount;
        newHolding.unlockTime = _unlockTime;
    }

    function showUnlockTime() public view returns(int256){
        Holding memory holding = holdings[msg.sender];
        return (int(holding.unlockTime) - int(block.timestamp)) / 1 days;
    }

    function unlockHolding() public payable {
        Holding storage holding = holdings[msg.sender];
        require(holding.amount > 0, "You don't have any holdings");
        require(block.timestamp >= holding.unlockTime, "You can't withdraw yet");

        uint256 amountToSend = holding.amount;
        holding.amount = 0;
        (bool success, ) = msg.sender.call{value: amountToSend}("");
        require(success, "Transfer failed.");
    }
}
