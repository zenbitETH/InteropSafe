
import logo from '/logo.png'

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col'>
      <main className='flex-1 flex flex-col items-center justify-center'>
        <img
          src={logo}
          alt='InteropSAFE Logo'
          className='w-[500px] max-w-full mb-10'
        />
        <div className='text-7xl font-timmana text-center'>
          Create an InteropSAFE
        </div>
        <p className='text-lg text-neutral-300 font-tilt-neon text-center'>
          Same multisig address on multiple chains with one click
        </p>
      </main>
    </div>
  )
}
