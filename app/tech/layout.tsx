import Link from 'next/link'

export default function TechSkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex'>
      <TechSkillsNav />
      <div className=''>{children}</div>
    </section>
  )
}

const TechSkillsNav = () => {
  return (
    <div>
      <nav className='hidden sm:flex flex-col gap-2 w-1/6 flex-none'>
        <NavLink href='/' title='Home' />
        <NavLink href='/tech/next' title='Next.js' />
        <NavLink href='/tech/go' title='Go' />
        <NavLink href='/tech/nvim' title='Neovim' />
        <NavLink href='/tech/typescript' title='Typescript' />
        <NavLink href='/tech/tailwind' title='Tailwind CSS' />
        <NavLink href='/tech/rust' title='Rust' />
        <NavLink href='/tech/git' title='Github' />
      </nav>
    </div>
  )
}

type Props = {
  title: string
  href: string
}
const NavLink: React.FC<Props> = ({ title, href }) => {
  return (
    <Link className='hover:underline hover:bg-violet-600' href={href}>
      <h1 className='text-3xl px-4 py-2'>{title}</h1>
    </Link>
  )
}
