const hre = require("hardhat");

let verifyArr = []

async function main() {

    const Member = await hre.ethers.getContractFactory("Counter");
    const MemberContract = await Member.deploy();
    await MemberContract.deployed();

    verifyArr.push({
        address: MemberContract.address,
        // constructorArguments: []
    })

}


main()
    .then(() => {

        const fs = require('fs')
        try {
            fs.writeFileSync("./data/verify.json", JSON.stringify(verifyArr))
        } catch (e) {
            console.log(e, verifyArr)
        }

        process.exit(0)
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });