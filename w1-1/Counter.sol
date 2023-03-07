// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {

    uint256 public value;

    function add(uint256 x) external {
        value += x;
    }

}
