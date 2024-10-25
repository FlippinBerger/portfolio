import Image from 'next/image'
import * as motion from 'framer-motion/client'
import Link from 'next/link'

export default function AboutPage() {
  const duration = 0.4
  return (
    <div className='m-4 sm:grid sm:grid-cols-2 min-h-full'>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: -1200 }}
        transition={{ duration: duration }}
        className='flex sm:flex-col gap-8 items-center rounded-2xl p-2 mt-4'
      >
        <Link href='/'>
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
              className='rounded-full aspect-square object-cover border border-sky-300'
            />
          </motion.div>
        </Link>
        <Link href='/'>
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
              className='rounded-full aspect-square object-cover border border-sky-300'
            />
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 1200 }}
        transition={{ duration: duration }}
        className='sm:border sm:border-sky-300 rounded-2xl pl-4 p-2'
      >
        <Link href='/'>
          <h1 className='text-4xl my-4 text-green-400'>Chris Berger</h1>
        </Link>
        <ul className='list-disc pl-2 marker:text-sky-300'>
          <li>
            <h1 className='text-2xl text-green-400 mb-3'>
              I&apos;m a Michigander currently soaking up the sunshine in Fort
              Collins, CO.
            </h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400 mb-3'>
              I graduated from the Univesity of Michigan in 2016 - Go Blue!
            </h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400 mb-3'>
              I am looking to continue pushing myself as a full stack developer
              by building websites for local businesses that I care about.{' '}
            </h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400 mb-3'>
              I love to play outside. We do a lot of hiking, skiing, camping,
              and fly fishing.
            </h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400 mb-3'>
              I&apos;m an avid runner. You can find me on{' '}
              <span>
                <a
                  className='text-sky-300 underline'
                  href='https://www.strava.com/athletes/119450827'
                  target='_blank'
                >
                  Strava
                </a>
              </span>
            </h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400 mb-3'>
              I&apos;m a huge fantasy nerd. My favorite authors are Robin Hobb
              and Brandon Sanderson. Special shoutouts to The Liveship Traders
              and Mistborn, respectively.
            </h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400 mb-3'>
              Currently reading: Sanderson&apos;s The Way of Kings, Book 1 of
              The Stormlight Archive. This one easily has the potential to
              overtake Mistborn for me.
            </h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400 mb-3'>
              I also enjoy gaming. I play a lot of indie titles and Valorant
              (trash tier Viper main).
            </h1>
          </li>
        </ul>
      </motion.div>
      <div className='sm:col-span-2 mt-4 sm:mt-8 pl-4 sm:mx-16'>
        <h1 className='text-2xl text-green-400'>
          I&apos;m also hyper competitve and LOVE a stupid game. Some random
          leagues I have been a part of include:
        </h1>
        <ul className='list-disc mt-2 marker:text-sky-300'>
          <li>
            <h1 className='text-2xl text-green-400'>Cornhole</h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400'>Pinball</h1>
          </li>
          <li>
            <h1 className='text-2xl text-green-400'>Disc Golf</h1>
          </li>
        </ul>
        <h1 className='text-2xl text-green-400 mt-4 sm:mt-2'>
          I&apos;m still looking to add darts, pool, and any others that come up
          to the list above.
        </h1>
      </div>
    </div>
  )
}
