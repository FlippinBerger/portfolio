export default function PortfolioPage() {
  return (
    <div className='m-4'>
      <main className='flex flex-col'>
        <h1 className='text-4xl text-sky-300'>Chris&apos; portfolio</h1>
        <h2 className='text-2xl text-green-400'>
          Welcome to the jungle. This is a space for me to show off things
          I&apos;ve created.
        </h2>
        <div className='mt-4'>
          <ul>
            <li>
              <PortfolioCard
                title='Old Town Run Club'
                href='https://otrcfc.com'
                description='Landing page built with Next.js for our run club here in Fort Collins :)'
              />
            </li>
            <li>
              <PortfolioCard
                title='Bevy TabGroup bug fix'
                href='https://github.com/bevyengine/bevy/pull/19218'
                description='Fixed an issue where cycling through TabGroups did not respect the order set by the developer with TabGroup and TabIndex'
              />
            </li>
            <li>
              <PortfolioCard
                title='Bevy timer rename'
                href='https://github.com/bevyengine/bevy/pull/19386'
                description='Simple update to align the Timer methods with the public API for Time and Stopwatch'
              />
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

type Props = {
  title: string
  href: string
  description?: string
}

const PortfolioCard: React.FC<Props> = ({ title, href, description }) => {
  return (
    <div className='border border-green-400 rounded p-2 my-4'>
      <a href={href} target='_blank'>
        <h1 className='hover:underline decoration-sky-300 text-sky-300 text-xl sm:text-3xl'>
          {title}
        </h1>
        {description && (
          <h2 className='text-green-400 text-l sm:text-2xl pt-2'>
            {description}
          </h2>
        )}
      </a>
    </div>
  )
}
