import logo from '/logo.png'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
      <img src={logo} alt='InteropSafe Logo' width={350} />
      <h1 className='font-timmana'>Create an InteropSAFE</h1>
      <h3 className='font-tilt-neon'>Same Safe Address on multiple chains with one click</h3>
    </div>
  )
}
