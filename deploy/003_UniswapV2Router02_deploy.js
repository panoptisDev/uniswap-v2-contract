  module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const uniswapV2FactoryDeploy = await deployments.get('UniswapV2Factory');
    const weth9Deploy = await deployments.get('WETH9');

    const uniswapV2Router02DeployResult = await deploy('UniswapV2Router02', {
        from: deployer,
        args: [uniswapV2FactoryDeploy.address,weth9Deploy.address],
        log: true,
    });

    if (uniswapV2Router02DeployResult.newlyDeployed) {
        console.log(
          `contract Token deployed at ${uniswapV2Router02DeployResult.address} using ${uniswapV2Router02DeployResult.receipt.gasUsed} gas`
        );
    }

  };

  module.exports.tags = ['UniswapV2Router02'];