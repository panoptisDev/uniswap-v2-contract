module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  
    const operator = (await hre.ethers.getSigners())[0];
    console.log("==>operator address is %s",operator.address);
    const uniswapV2FactoryDeployResult = await deploy('UniswapV2Factory', {
        from: deployer,
        args: [operator.address],
        log: true,
    });

    if (uniswapV2FactoryDeployResult.newlyDeployed) {
        console.log(
          `contract Token deployed at ${uniswapV2FactoryDeployResult.address} using ${uniswapV2FactoryDeployResult.receipt.gasUsed} gas`
        );
    }
    const UniswapV2FactoryContract = await ethers.getContract("UniswapV2Factory");
    const pairhash  = await UniswapV2FactoryContract.getPairHash();
    console.log("pairhash ==> ",pairhash);
  };

  module.exports.tags = ['UniswapV2Factory'];