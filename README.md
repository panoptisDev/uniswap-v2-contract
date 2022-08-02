# 基于UNISWAP-V2源码修改，部署在ploygon上的swap项目

项目包含：
* contract for uniswap v2
  * swap factory 合约
  * swap Router 合约
  * weth 合约
  * Multicall 合约

* 前端：
  * uniswap-interface - 2020-9-1 -commit for 67e75f6cc3ce0c733a21a3554840e435ffc064a1 

* V2-SDK:
  * v2-sdk - 2020-9-14 -commit for a88048e9c4198a5bdaea00883ca00c8c8e582605

## 部署合约到ploygon项目
* 使用`hardhat-deploy`插件进行部署，hardhat-deploy插件支持每个网络的特定部署脚本（例如 L1 与 L2），并且保存部署信息，相同在deploy中防止重新部署，
与`hardhat-deploy-ethers`结合使用，它提供了封装过的ethers.js库，能够按名称`（如await ethers.getContract("ContractName")）`获取 ethers 合约实例。
能够创建自己的测试夹具`await deployments.fixture(['Token'])`，自动受益于evm_snapshot测试加速提升。
详情请参考：`https://www.npmjs.com/package/hardhat-deploy#more-information-on-hardhat-tasks`。
* 使用全新的钱包地址进行部署，确保不同链上部署的合约地址相同，方便前端切换网络，creat contract address 时通过合约nonce计算得到，（部署合约nonce++）

1. 部署`swap factory` 合约 添加 `getPairHash {return keccak256(type(UniswapV2Pair).creationCode)}`获取哈希值;
2. 部署`swap Router` 合约 修改 `library pairFor`接口的hash值为 factory合约计算出来的值，用于计算交易对的地址。
3. 部署`weth`合约和`Multicall`合约

## 发布SDK到npm
1. 修改 v2-sdk 中 factory合约地址，`init_code_pair_hash`地址 ，WETH 地址，链ID。编译发布到NPM镜像。

## 编译前端
1. 修改前端 Router地址 Multicall地址，支持的`ChainTokenList`,支持的区块链浏览器地址`getEthercanLink`
2. 修改引用的SDK，tokenList列表。

