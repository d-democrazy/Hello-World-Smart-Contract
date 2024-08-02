async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  console.log("Deploying Contract...");
  const helloWorld = await HelloWorld.deploy("Hello World");
  await helloWorld.deployed();
  console.log("Contract deployed to address:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
