import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'

export default function () {
  const { wallets } = useWallet()

  return (
    <div className="h-100vh flex-center gap-8 bg-#E5E5E5">
      <WalletMultiButton />
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.adapter.name} className="flex items-center">
            <span className="w-28">{wallet.adapter.name}</span>
            <span className="">{wallet.readyState}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
