import Image from 'next/image'

export default function GoPage() {
  return (
    <div className='flex flex-col mt-8 mx-8'>
      <div className='flex self-center items-center gap-2 my-8'>
        <a href='https://go.dev/' target='_blank'>
          <h1 className='text-4xl text-violet-600'>Go</h1>
        </a>
        <Image
          src='/images/gopher.svg'
          alt='Go gopher'
          height={48}
          width={48}
        />
      </div>
      <h2 className='text-2xl text-green-400 mb-8'>
        Golang is my comfort backend language. It is the language I spent the
        most time learning, and is second only to Typescript in the language I
        have the most production experience writing.
      </h2>
      <h2 className='text-2xl text-green-400 mb-8'>
        The thing I love most about Go is the simplicity. Production code bases
        that I have worked in all have their issues, but I feel like Go works
        hard to prevent a lot of the style and &quot;over-coding&quot; issues
        that appear in a lot of larger teams. The fact that it gives you limited
        ways to tackle the task at hand goes a long way in making a cohesive and
        easy to understand code base. For that reason Go will always be a
        preference of mine when I need to work in a larger team.
      </h2>
    </div>
  )
}
