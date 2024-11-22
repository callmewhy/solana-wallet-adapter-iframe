import { Keypair, Transaction } from '@solana/web3.js'
import { useEffect } from 'react'
import nacl from 'tweetnacl'

type MessageType = 'install' | 'connect' | 'disconnect' | 'signMessage' | 'signTransaction'

// !!! DEMO ONLY !!!
const keypair = Keypair.generate()

export function useIframeWalletHandler() {
  useEffect(() => {
    const onMessage = async (event: MessageEvent<any>) => {
      const iframeWindow = event.source as any

      if (iframeWindow && event.data?.target === 'iframe-wallet-adapter') {
        console.info('useIframeWalletHandler - onMessage', event.data)
        const { type, id, payload, target } = event.data as {
          type: MessageType
          id: string
          payload: any
          target: string
        }

        switch (type) {
          case 'install': {
            iframeWindow.postMessage({ target, id, type }, event.origin)
            break
          }
          case 'connect': {
            iframeWindow.postMessage({ target, id, type, payload: { publicKey: keypair.publicKey.toBase58() } }, '*')
            break
          }
          case 'disconnect': {
            iframeWindow.postMessage({ target, id, type }, '*')
            break
          }
          case 'signMessage': {
            const signature = nacl.sign.detached(new Uint8Array(payload.message), keypair.secretKey)
            iframeWindow.postMessage({ target, type, id, payload: { signature: Array.from(signature) } }, '*')
            break
          }
          case 'signTransaction': {
            const tx = Transaction.from(new Uint8Array(payload.transaction))
            tx.sign(keypair)
            const signedTransaction = tx.serialize()
            iframeWindow.postMessage({ target, id, type, payload: { signedTransaction } }, '*')
            break
          }
          default: {
            console.error('useIframeWalletHandler - onMessage - unknown type', type)
          }
        }
      }
    }

    window.addEventListener('message', onMessage)

    return () => {
      window.removeEventListener('message', onMessage)
    }
  }, [])
}