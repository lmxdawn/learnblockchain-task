const { expect } = require("chai");
const { BigNumber } = require("ethers");

describe("Counter contract", function () {

    let CounterContract;

    beforeEach(async () => {
        const MyContract = await ethers.getContractFactory("Counter");
        CounterContract = await MyContract.deploy();
        await CounterContract.deployed();
    });

    it("should return the correct count", async function () {
        await CounterContract.add(1);
        const count = await CounterContract.count();
        expect(BigNumber.from(count)).to.equal(BigNumber.from(1));
    });
});