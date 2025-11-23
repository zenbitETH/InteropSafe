import { useState } from 'react'
import { createEilAccount } from '../lib/eilAccount'
import { getSdk, USDC } from '../lib/eilSdk' 

async function handleSendBatch() {
  try {
    const { account } = await createEilAccount()
    const sdk = await getSdk()

    // ...build CrossChainBuilder, add TransferAction per recipient, etc.
  } catch (err) {
    console.error(err)
    // show toast / error in UI
  }
}

type Recipient = {
  address: string
  amount: string
  currency: 'USDC' | 'ETH'
}

export default function Landing() {
  const [recipients, setRecipients] = useState<Recipient[]>([
    { address: '', amount: '', currency: 'USDC' },
  ])

  const handleAddressChange = (index: number, value: string) => {
    setRecipients(prev => {
      const next = [...prev]
      next[index] = { ...next[index], address: value }
      return next
    })
  }

  const handleAmountChange = (index: number, value: string) => {
    setRecipients(prev => {
      const next = [...prev]
      next[index] = { ...next[index], amount: value }
      return next
    })
  }

  const handleToggleCurrency = (index: number) => {
    setRecipients(prev => {
      const next = [...prev]
      const current = next[index]
      next[index] = {
        ...current,
        currency: current.currency === 'USDC' ? 'ETH' : 'USDC',
      }
      return next
    })
  }

  const handleAddRecipient = () => {
    setRecipients(prev => [...prev, { address: '', amount: '', currency: 'USDC' }])
  }

  const handleSendBatch = () => {
    // TODO: wire this up to the backend / contract call
    console.log('Sending batch to recipients:', recipients)
  }

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center'>
      <div className='w-full max-w-5xl px-6'>
        <div className='border border-white rounded-[32px] px-8 md:px-12 py-10 flex flex-col items-center shadow-[0_0_40px_rgba(0,0,0,0.6)]'>
          <h1 className='font-timmana text-2xl md:text-3xl mb-8 text-center'>
            Send a batch of txs
          </h1>

          <div className='w-full space-y-4 mb-6'>
            {recipients.map((recipient, index) => {
              const symbol = recipient.currency === 'USDC' ? '$' : 'Ξ'
              const tokenLabel = recipient.currency
              const amountPlaceholder =
                recipient.currency === 'USDC' ? 'Amount in USDC' : 'Amount in ETH'

              return (
                <div key={index} className='flex flex-col md:flex-row gap-4 w-full'>
                  {/* Address input */}
                  <input
                    type='text'
                    value={recipient.address}
                    onChange={e => handleAddressChange(index, e.target.value)}
                    placeholder='Name or address'
                    className='w-full md:w-[450px] rounded-full bg-white px-6 py-2 md:py-3 text-sm md:text-base text-black placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-neutral-400'
                  />

                  {/* Amount + currency + toggle */}
                  <div className='flex items-center gap-2 md:w-[260px]'>
                    <div className='flex items-center justify-between w-full rounded-full bg-white px-4 py-2 md:py-3 text-sm md:text-base text-black'>
                      <span className='mr-2'>{symbol}</span>
                      <input
                        type='number'
                        value={recipient.amount}
                        onChange={e => handleAmountChange(index, e.target.value)}
                        placeholder={amountPlaceholder}
                        className='flex-1 bg-transparent outline-none placeholder:text-neutral-500 text-black'
                      />
                      <span className='ml-2 text-xs md:text-sm text-black'>{tokenLabel}</span>
                    </div>
                    <button
                      type='button'
                      onClick={() => handleToggleCurrency(index)}
                      className='shrink-0 px-3 md:px-4 py-2 rounded-full bg-neutral-700 text-[10px] md:text-xs font-tilt-neon text-white hover:bg-neutral-600 transition-colors'
                    >
                      Switch to {recipient.currency === 'USDC' ? 'ETH' : 'USDC'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            type='button'
            onClick={handleAddRecipient}
            className='mt-2 px-5 py-2 rounded-full bg-neutral-800 text-xs md:text-sm font-tilt-neon hover:bg-neutral-700 transition-colors'
          >
            + Add Recipient
          </button>
        </div>

        <div className='flex justify-center mt-8'>
          <button
            type='button'
            onClick={handleSendBatch}
            className='px-10 md:px-14 py-3 md:py-3.5 rounded-full bg-neutral-700 text-sm md:text-lg font-tilt-neon hover:bg-neutral-600 transition-colors'
          >
            Send Batch
          </button>
        </div>
      </div>
    </div>
  )
}
