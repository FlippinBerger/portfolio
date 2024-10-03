import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <main className='flex flex-col justify-around items-center h-screen'>
        <div className='flex flex-col items-center'>
          <div className='bg-violet-600 rounded-2xl m-4'>
            <h1 className='text-4xl p-4'>Hey, I'm Chris</h1>
          </div>
          <div className='flex flex-col justify-center items-start bg-violet-600 p-4 rounded-2xl'>
            <h2 className='text-2xl'>
              I'm a freelance developer specializing in Next.js to provide value
              as fast as possible
            </h2>
            <h2 className='text-2xl'>I also work well with Go :)</h2>
          </div>
        </div>

        <div className='flex gap-8 justify-center w-screen'>
          <div className='bg-violet-600 p-4 rounded-2xl text-xl'>
            <Link href='/portfolio'>Portfolio</Link>
          </div>
          <div className='bg-violet-600 p-4 rounded-2xl text-xl'>
            <Link href='/about'>About Me</Link>
          </div>
        </div>
        <div />
        <div />
      </main>

      <footer className='flex gap-2 px-4 py-2 rounded-2xl bg-violet-600 mx-auto mb-4'>
        <h1>Twitter</h1>
        <h1>LinkedIn</h1>
        <h1>Github</h1>
        <h1>Email</h1>
      </footer>
    </div>
  )
}
