import { RiNextjsFill } from '@remixicon/react'

export default function NextPage() {
  return (
    <div className='flex flex-col items-center mx-8'>
      <div className='flex items-center gap-2 my-8'>
        <a href='https://nextjs.org/' target='_blank'>
          <h1 className='text-4xl text-sky-300'>Next.js</h1>
        </a>
        <RiNextjsFill size={48} />
      </div>
      <h2 className='text-2xl text-green-400 mb-8'>
        Next.js is my new baby. I have recently dropped the notion that TS
        shouldn&apos;t be used anywhere and latched onto the fact that you can
        make cool websites (like this one) really quickly using Next.js.
      </h2>
      <h2 className='text-2xl text-green-400 mb-8'>
        I am looking to make a career out of full stack Next.js through either a
        full time position or freelancing for small businesses.
      </h2>
    </div>
  )
}
