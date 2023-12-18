// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voidvault {
    event Void(address indexed from, uint256 indexed tokenId);

    function void(uint256 tokenId) public {
        emit Void(msg.sender, tokenId);
    }
}
