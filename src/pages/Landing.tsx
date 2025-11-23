import { useState } from 'react'

export default function Landing() {
  const [recipients, setRecipients] = useState<string[]>([''])

  const handleChange = (index: number, value: string) => {
    setRecipients(prev => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  const handleAddRecipient = () => {
    setRecipients(prev => [...prev, ''])
  }

  const handleSendBatch = () => {
    // TODO: wire this up to the backend / contract call
    console.log('Sending batch to recipients:', recipients)
  }

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center'>
      <div className='w-full max-w-3xl px-6'>
        <div className='border border-white rounded-[32px] px-8 md:px-12 py-10 flex flex-col items-center shadow-[0_0_40px_rgba(0,0,0,0.6)]'>
          <h1 className='font-timmana text-2xl md:text-3xl mb-8 text-center'>
            Send a batch of txs
          </h1>

          <div className='w-full space-y-4 mb-6'>
            {recipients.map((value, index) => (
              <input
                key={index}
                type='text'
                value={value}
                onChange={e => handleChange(index, e.target.value)}
                placeholder='Name or address'
                className='w-full rounded-full bg-white px-6 py-2 md:py-3 text-sm md:text-base text-black placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-neutral-400'
              />
            ))}
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
