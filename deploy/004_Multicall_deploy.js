module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer ,deployFactory,deployRouter} = await getNamedAccounts();
  
    const multicallDeployResult = await deploy('Multicall', {
      from: deployer,
      args: [],
      log: true,
    });

    if (multicallDeployResult.newlyDeployed) {
        console.log(
          `contract Token deployed at ${multicallDeployResult.address} using ${multicallDeployResult.receipt.gasUsed} gas`
        );
    }
  };

module.exports.tags = ['Multicall'];

  


