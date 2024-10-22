'use client'

import { RiMenuLine } from '@remixicon/react'
import Link from 'next/link'
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from 'react-aria-components'

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
      <div className='sm:hidden absolute top-2 left-2'>
        <MenuTrigger>
          <Button aria-label='Menu'>
            <RiMenuLine size={36} />
          </Button>
          <Popover>
            <Menu className='bg-black border border-violet-600'>
              <MenuItem className='hover:bg-violet-600'>
                <NavLink href='/' title='Home' />
              </MenuItem>
              <MenuItem className='hover:bg-violet-600'>
                <NavLink href='/tech/next' title='Next.js' />
              </MenuItem>
              <MenuItem className='hover:bg-violet-600'>
                <NavLink href='/tech/go' title='Go' />
              </MenuItem>
              <MenuItem className='hover:bg-violet-600'>
                <NavLink href='/tech/nvim' title='Neovim' />
              </MenuItem>
              <MenuItem className='hover:bg-violet-600'>
                <NavLink href='/tech/typescript' title='Typescript' />
              </MenuItem>
              <MenuItem className='hover:bg-violet-600'>
                <NavLink href='/tech/tailwind' title='Tailwind CSS' />
              </MenuItem>
              <MenuItem className='hover:bg-violet-600'>
                <NavLink href='/tech/rust' title='Rust' />
              </MenuItem>
              <MenuItem className='hover:bg-violet-600'>
                <NavLink href='/tech/git' title='Github' />
              </MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
      </div>
    </div>
  )
}

type Props = {
  title: string
  href: string
}
const NavLink: React.FC<Props> = ({ title, href }) => {
  return (
    <Link className='sm:hover:underline sm:hover:bg-violet-600' href={href}>
      <h1 className='text-xl sm:text-3xl pl-4 py-2'>{title}</h1>
    </Link>
  )
}
