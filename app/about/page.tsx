import Image from 'next/image'
import * as motion from 'framer-motion/client'

export default function AboutPage() {
  return (
    <div className='m-4 grid grid-cols-2 min-h-full'>
      <div className='flex flex-col gap-8 items-center rounded-2xl p-2 mt-4'>
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
        >
          <Image
            src='/images/hike.jpg'
            alt='Chris hiking'
            height='300'
            width='300'
            className='rounded-full aspect-square object-cover border border-violet-600'
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
        >
          <Image
            src='/images/stick.jpg'
            alt='Chris hiking'
            height='300'
            width='300'
            className='rounded-full aspect-square object-cover border border-violet-600'
          />
        </motion.div>
      </div>
      <div className='border border-violet-600 rounded-2xl p-2 '>
        <h1 className='text-4xl mb-2 text-green-400'>Chris Berger</h1>
        <h1 className='text-2xl text-green-400'>
          I&apos;m a Michigander currently soaking up the sunshine in Fort
          Collins, CO
        </h1>
      </div>
    </div>
  )
}
