'use client'

import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { mainnet, polygon, sepolia } from 'wagmi/chains'
import { rss3 } from '../chains'

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'

const config = getDefaultConfig({
	appName: 'RainbowKit App',
	projectId: 'YOUR_PROJECT_ID',
	chains: [
		rss3,
		mainnet,
		polygon,
		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
	],
	ssr: true,
})

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={client}>
				<RainbowKitProvider>
					<Component suppressHydrationWarning {...pageProps} />
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}

export default MyApp
