import { defineChain } from 'viem'

export const rss3 = defineChain({
    id: 2331,
    name: 'RSS3 VSL Sepolia Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.rss3.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Scan',
            url: 'https://scan.testnet.rss3.io',
        },
    },
})