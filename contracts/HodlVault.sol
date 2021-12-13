//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HodlVault {
    mapping(address => uint256) public holdings;
    mapping(address => uint256) public unlockTimes;

   struct HoldingDetails {
       uint256 amount;
       uint256 unlockTime;
   }

    function storeHoldings(uint256 _holdingPeriodInDays) public payable {
        console.log("Sender trying to store holdings %s", msg.sender);
        console.log("Sender is trying to store: %s", msg.value);
        console.log("Sender wants to lock up holdings for %s days", _holdingPeriodInDays);

        require(msg.value > 0, "You need to send ether to store");
        require(holdings[msg.sender] == 0, "Can't add new holdings");
        uint256 _unlockTime = block.timestamp + (_holdingPeriodInDays * 1 days);
        unlockTimes[msg.sender] = _unlockTime;
        holdings[msg.sender] = msg.value;
    }

    function unlockHoldings() public {
        uint256 unlockTime = unlockTimes[msg.sender];
        require(block.timestamp >= unlockTime, "You can't withdraw yet");

        uint256 heldAmount = holdings[msg.sender];
        require(heldAmount > 0, "You don't have any holdings");

        holdings[msg.sender] = 0;
        unlockTimes[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: heldAmount}("");
        require(success, "Transfer failed.");
    }

    function getVaultDetails(address sender) public view returns(HoldingDetails memory) {
        console.log("Sender trying to view holdings %s", sender);
        console.log("Sender's current holdings: %s", holdings[sender]);
        console.log("Sender's unlock time: %s", unlockTimes[sender]);
        return HoldingDetails(holdings[sender], unlockTimes[sender]);
    }
}
