import Image from 'next/image'

export default function TypescriptPage() {
  return (
    <div className='flex flex-col mt-8 mx-8'>
      <div className='flex self-center items-center gap-2 my-8'>
        <a href='https://www.typescriptlang.org/' target='_blank'>
          <h1 className='text-4xl text-sky-300'>Typescript</h1>
        </a>
        <Image
          src='/images/ts.svg'
          alt='Typescript icon'
          height={48}
          width={48}
          className='bg-white'
        />
      </div>
      <h2 className='text-2xl text-green-400 mb-8'>
        Typescript is quickly becoming one of my favorite languages because of
        how easy it is to create web apps with it. I used to be against the
        usage of Typscript/Javascript because I knew other languages were faster
        and safer. In the past few years I&apos;ve gotten over that elitist
        thinking. Typescript helps a ton with the type system to help fight the
        issues seen often in Javascript, and it is almost always fast enough
        these days. When it&apos;s not you can pretty easily swap it out for Go
        or Rust to squeeze out the performance that you need.
      </h2>
      <h2 className='text-2xl text-green-400 mb-8'>
        I am now using Typscript more than any other language by a lot and
        having a great time creating websites for myself and others that are
        actually making a difference. The power of getting stuff done cannot be
        overstated, and Typescript combined with frameworks such as Next.js
        cannot be beat there in my opinion.
      </h2>
    </div>
  )
}
