import { RiGithubLine } from '@remixicon/react'

export default function GithubPage() {
  return (
    <div className='flex flex-col mt-8 mx-8'>
      <div className='flex self-center items-center gap-2 my-8'>
        <a href='https://github.com' target='_blank'>
          <h1 className='text-4xl text-violet-600'>Github</h1>
        </a>
        <RiGithubLine size={48} />
      </div>
      <h2 className='text-2xl text-green-400 mb-8'>
        Github has been my source control choice for my entire career. I am
        completely comfortable with a day to day workflow on an internal team,
        or forking a code base to work on open source projects. I have
        contributed both ways and have always been a bit of a helper on the team
        when merges/rebases get messy.
      </h2>
      <h2 className='text-2xl text-green-400 mb-8'>
        I also have used Github Actions pretty extensively in CI/CD pipelines
        that I have worked on in the past and always opt for this option in my
        own projects.
      </h2>
    </div>
  )
}
