import Link from 'next/link'
import * as motion from 'framer-motion/client'
import Buttin from './button'
import Footer from './footer'

export default function Home() {
  const duration = 0.4

  return (
    <div className='flex flex-col justify-between h-screen'>
      <main className='flex flex-col justify-around items-center h-screen'>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -1200 }}
          transition={{ duration: duration }}
        >
          <div className='flex flex-col items-center'>
            <div className='bg-violet-600 rounded-2xl m-4'>
              <h1 className='text-4xl p-4'>Hey, I&apos;m Chris</h1>
            </div>
            <div className='flex flex-col justify-center items-start bg-violet-600 p-4 rounded-2xl'>
              <h2 className='text-2xl'>
                I&apos;m a freelance developer specializing in Next.js to
                provide value as fast as possible
              </h2>
              <h2 className='text-2xl'>I also work well with Go :)</h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 1200 }}
          transition={{ duration: duration }}
        >
          <div className='flex gap-8 justify-center w-screen'>
            <Buttin>
              <Link className='p-4' href='/about'>
                About Me
              </Link>
            </Buttin>
            <Buttin>
              <Link className='p-4' href='/tech'>
                Tech Skills
              </Link>
            </Buttin>
            <Buttin>
              <Link className='p-4' href='/portfolio'>
                Portfolio
              </Link>
            </Buttin>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
