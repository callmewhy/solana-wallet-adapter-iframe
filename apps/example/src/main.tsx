import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@solana/wallet-adapter-react-ui/styles.css'

import { WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { IframeWalletAdapter } from 'solana-wallet-adapter-iframe'

import { WALLET_ICON } from '@/components/icon'

import App from './App'

const root = createRoot(document.querySelector('#root')!)

root.render(
  <BrowserRouter>
    <WalletProvider wallets={[new IframeWalletAdapter('Iframe Wallet', WALLET_ICON)]} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </BrowserRouter>
)
