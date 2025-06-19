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
        Next.js is my new baby. I have recently latched onto the fact that you
        can make cool websites (like this one) really quickly using Next.js.
      </h2>
    </div>
  )
}
