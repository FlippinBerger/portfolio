import Link from 'next/link'

export default function PortfolioPage() {
  return (
    <div className='m-4'>
      <main className='flex flex-col'>
        <h1 className='text-4xl'>Chris&apos;s portfolio</h1>
        <h2 className='text-2xl'>
          Welcome to the jungle. This is a space for me to practice my front end
          and design skills.
        </h2>
        <div className='mt-4'>
          <h3 className='text-2xl'>Local Business Landing Pages</h3>
          <ul>
            <li>
              <Link href='/coffee'>Coffee Shop</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
