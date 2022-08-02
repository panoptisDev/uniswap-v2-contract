module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer ,deployFactory,deployRouter} = await getNamedAccounts();
  
    const weth9DeployResult = await deploy('WETH9', {
      from: deployer,
      args: [],
      log: true,
    });

    if (weth9DeployResult.newlyDeployed) {
        console.log(
          `contract Token deployed at ${weth9DeployResult.address} using ${weth9DeployResult.receipt.gasUsed} gas`
        );
    }
  };

module.exports.tags = ['WETH9'];

  


