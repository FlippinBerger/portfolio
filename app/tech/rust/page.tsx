import Image from 'next/image'

export default function RustPage() {
  return (
    <div className='flex flex-col mt-8 mx-8'>
      <div className='flex self-center items-center gap-2 my-8'>
        <a href='https://www.rust-lang.org/' target='_blank'>
          <h1 className='text-4xl text-sky-300'>Rust</h1>
        </a>
        <Image
          className='bg-white rounded-full'
          src='/images/rust.svg'
          alt='Go gopher'
          height={48}
          width={48}
        />
      </div>
      <h2 className='text-2xl text-green-400 mb-8'>
        Rust is my favorite language and, in my opinion, the future of advanced
        computing. I am certainly not a pro, but I have played with Rust a lot
        and absolutely love how much the compiler helps you when you are working
        on a project. It is almost a guarantee that the code will do what you
        want once you work through the compiler errors. The language does so
        much work for you to ensure the code is fast, safe, and correct.
      </h2>
      <h2 className='text-2xl text-green-400 mb-8'>
        I have made a few small contributions to the{' '}
        <span className='underline text-sky-300'>
          <a href='https://bevyengine.org/' target='_blank'>
            Bevy project
          </a>
        </span>{' '}
        and still would love to make a game someday. I am now so confident in
        Rust as a language that I am waiting for a Rust engine to be production
        ready before I launch that side venture.
      </h2>
    </div>
  )
}
