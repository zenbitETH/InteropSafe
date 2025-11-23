import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import { type AppKitNetwork, arbitrum, base, mainnet, optimism } from '@reown/appkit/networks'
import { createAppKit, type CaipNetworkId } from '@reown/appkit/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { WagmiProvider } from 'wagmi';
import type { HttpTransportConfig } from 'viem';


// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://dashboard.reown.com
const projectId = 'b8da5dc2a9e358543b1edaaed02e2d6a'

// 2. Create a metadata object - optional
const metadata = {
  name: 'InteropSafe App',
  description: 'Create same safe address on multiple chains with one clic',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
const networks = [mainnet, optimism, base, arbitrum] as [AppKitNetwork, ...AppKitNetwork[]]

type CustomRpcUrl = {
  url: string
  config?: HttpTransportConfig // Optional transport configuration
}

type CustomRpcUrlMap = Record<CaipNetworkId, CustomRpcUrl[]>

const customRpcUrls: CustomRpcUrlMap = {
  'eip155:1': [{ url: 'https://virtual.mainnet.eu.rpc.tenderly.co/a5658cee-add9-40a5-890c-2b32b3b4b2e4' }],
  'eip155:10': [{ url: 'https://virtual.optimism.eu.rpc.tenderly.co/89ed3f83-bf23-4f97-88c6-06fea986de2c' }],
  'eip155:8453': [{ url: 'https://virtual.base.eu.rpc.tenderly.co/f346cd0c-38c5-43af-881d-26ef5805c88a' }],
  'eip155:42161': [{ url: 'https://virtual.arbitrum.eu.rpc.tenderly.co/e6fb815c-cd14-4c18-8353-69ee17162268' }]
}

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
  customRpcUrls
  })

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  },
  customRpcUrls
})

function App() {

  return (
     <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className='w-full h-full'>
          <Header />
          <main className='w-full h-full'>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
   
  )
}

export default App
