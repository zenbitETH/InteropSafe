import { AmbireBundlerManager, AmbireMultiChainSmartAccount } from '@eil-protocol/accounts'
import { zeroAddress } from 'viem'

import { getDeploymentChains } from '../config/wagmiConfigHelpers' // your FlagsDeployment helper
import { fetchWalletClient } from './eilWallet'

export async function createEilAccount() {
  const { walletClient, owner } = await fetchWalletClient()
  const [chainId0, chainId1] = getDeploymentChains()

  const bundlerManager = new AmbireBundlerManager(walletClient, new Map())

  const account = new AmbireMultiChainSmartAccount(
    walletClient,
    owner ?? zeroAddress,
    [BigInt(chainId0), BigInt(chainId1)],
    bundlerManager,
  )

  await account.init()

  return { account, walletClient }
}