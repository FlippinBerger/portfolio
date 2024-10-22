import { RiTailwindCssFill } from '@remixicon/react'

export default function TailwindPage() {
  return (
    <div className='flex flex-col mt-8 mx-8'>
      <div className='flex self-center items-center gap-2 my-8'>
        <a
          href='https://tailwindcss.com/'
          target='_blank'
          className='flex-none'
        >
          <h1 className='text-4xl text-violet-600'>Tailwind CSS</h1>
        </a>
        <RiTailwindCssFill size={48} />
      </div>
      <h2 className='text-2xl text-green-400 mb-8'>
        Tailwind CSS has completely changed how I think about styling my
        components. As a backend-leaning full stack dev, I used to HATE CSS with
        a burning passion and never took the time to really learn it. Over time
        I picked up some tricks here and there but never felt comfortable when
        it came time to make things look nice.
      </h2>
      <h2 className='text-2xl text-green-400 mb-8'>
        Ever since I started using Tailwind CSS I feel like this has completely
        changed. It is so easy to discover where the styles are being applied,
        and it is just as easy to discover how to do something that you
        didn&apos;t know prior. The discoverability here is huge and I feel like
        I am a much better front end dev because of this tool.
      </h2>
    </div>
  )
}
