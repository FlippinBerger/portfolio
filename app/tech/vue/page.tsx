import Image from 'next/image'

export default function VuePage() {
  return (
    <div className='flex flex-col mt-8 mx-8'>
      <div className='flex self-center items-center gap-2 my-8'>
        <a href='https://vuejs.org/' target='_blank'>
          <h1 className='text-4xl text-sky-300'>Vue.js</h1>
        </a>
        <Image
          src='/images/vue.svg'
          alt='Vue icon'
          height={48}
          width={48}
          className='bg-white'
        />
      </div>
      <h2 className='text-2xl text-green-400 mb-8'>
        I have been absolutely loving Vue lately. I&apos;m still not 100% sure
        what it is about React, but it sometimes feels a bit heavy and convulted
        even though I feel quite comfortable working with it. I&apos;ve found
        myself reaching for Vue more and more for little projects that I&apos;m
        building and it just makes sense for my developer brain. I think we
        should use whatever tools work best for both the task at hand and are
        ergonomic to work with and I&apos;m having a hard time finding
        situations where Vue doesn&apos;t fit both requirements like a glove.
      </h2>
    </div>
  )
}
