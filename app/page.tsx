import Link from 'next/link'
import * as motion from 'framer-motion/client'
import Footer from './footer'
import Image from 'next/image'

export default function Home() {
  const duration = 0.4
  const imgSize = 128

  return (
    <div className='flex flex-col justify-between sm:h-screen sm:min-h-80'>
      <main className='flex flex-col justify-around items-center sm:h-screen sm:min-h-80'>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -1200 }}
          transition={{ duration: duration }}
        >
          {' '}
          <div className='flex flex-col items-center'>
            <div className='flex flex-col sm:flex-row justify-center items-center'>
              <div className='bg-violet-600 rounded-2xl m-4 sm:flex-none'>
                <h1 className='text-4xl p-4'>Hey, I&apos;m Chris</h1>
              </div>
              <Image
                src='/images/me.jpg'
                alt='Chris'
                height={imgSize}
                width={imgSize}
                className='mb-4 rounded-full'
              />
            </div>
            <div className='flex flex-col justify-center items-start bg-violet-600 p-4 rounded-2xl mx-2 sm:mx-0'>
              <h2 className='text-2xl mb-2'>
                I&apos;m a sofware engineer with a lot of fullstack web
                experience who loves to play with new technologies.
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 1200 }}
          transition={{ duration: duration }}
        >
          <div className='flex flex-col items-center my-8 sm:flex-row sm:my-0 gap-8 justify-center sm:w-screen'>
            <motion.div whileHover={{ scale: 1.4 }}>
              <Link
                className='p-3 bg-violet-600 rounded-2xl text-xl'
                href='/about'
              >
                About Me
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.4 }}>
              <Link
                className='p-3 bg-violet-600 rounded-2xl text-xl'
                href='/tech/rust'
              >
                Tech Skills
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.4 }}>
              <Link
                className='p-3 bg-violet-600 rounded-2xl text-xl'
                href='/portfolio'
              >
                Portfolio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
