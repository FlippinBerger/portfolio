'use client'

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  useClose,
} from '@headlessui/react'
import { RiMenuLine } from '@remixicon/react'
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
        <NavLink href='/tech/rust' title='Rust' />
        <NavLink href='/tech/go' title='Go' />
        <NavLink href='/tech/typescript' title='Typescript' />
        <NavLink href='/tech/vue' title='Vue' />
        <NavLink href='/tech/next' title='Next.js' />
        <NavLink href='/tech/nvim' title='Neovim' />
        <NavLink href='/tech/tailwind' title='Tailwind CSS' />
        <NavLink href='/tech/git' title='Github' />
      </nav>
      <Popover className='sm:hidden absolute top-2 left-2'>
        <PopoverButton>
          <RiMenuLine size={36} />
        </PopoverButton>
        <PopoverPanel className='bg-black border border-sky-300'>
          <NavLink href='/' title='Home' />
          <NavLink href='/tech/rust' title='Rust' />
          <NavLink href='/tech/go' title='Go' />
          <NavLink href='/tech/typescript' title='Typescript' />
          <NavLink href='/tech/vue' title='Vue' />
          <NavLink href='/tech/next' title='Next.js' />
          <NavLink href='/tech/nvim' title='Neovim' />
          <NavLink href='/tech/tailwind' title='Tailwind CSS' />
          <NavLink href='/tech/git' title='Github' />
        </PopoverPanel>
      </Popover>
    </div>
  )
}

type Props = {
  title: string
  href: string
}
const NavLink: React.FC<Props> = ({ title, href }) => {
  const close = useClose()
  return (
    <Link
      className='hover:underline decoration-sky-300'
      href={href}
      onClick={() => close()}
    >
      <h1 className='text-sky-300 text-xl sm:text-3xl pl-4 py-2'>{title}</h1>
    </Link>
  )
}
