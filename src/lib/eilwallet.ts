// Adjust the path to where you export wagmiConfig from your appkit setup
import { wagmiConfig } from '../config/wagmiConfig' 
import { getAccount, getWalletClient, reconnect } from '@wagmi/core'

export async function fetchWalletClient() {
  // Make sure wagmi reconnects to the last used connector
  await reconnect(wagmiConfig)

  const account = getAccount(wagmiConfig)

  if (!account.isConnected || !account.connector) {
    throw new Error('Wallet not connected')
  }

  const walletClient = await getWalletClient(wagmiConfig, {
    connector: account.connector,
  })

  return {
    walletClient,
    owner: account.address!, // your EIL smart account owner
  }
}