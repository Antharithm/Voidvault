// const hre = require("hardhat");

// async function main() {
//   const voidVault = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // replace with the actual value

//   const vault = await hre.ethers.deployContract("Voidvault", [voidVault], {
//     value: voidVault,
//   });

//   await vault.waitForDeployment();

//   console.log(`Voidvault ${voidVault} was deployed to: ${vault.target}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
