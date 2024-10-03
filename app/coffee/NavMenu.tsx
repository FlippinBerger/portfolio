'use client'

import { RiMenuFill } from '@remixicon/react'
import Link from 'next/link'
import { useState } from 'react'

export default function NavMenu() {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='relative'>
      <button className='' onClick={() => setMenuOpened((old) => !old)}>
        <RiMenuFill size={36} />
      </button>
      {menuOpened && (
        <nav className='absolute top-0 left-10 bg-orange-400 w-32 rounded'>
          <ul className='flex flex-col gap-2'>
            <ListItem link='/coffee/menu' title='Menu' />
            <ListItem link='/coffee/about' title='About Us' />
            <ListItem link='/coffee/contact' title='Contact' />
          </ul>
        </nav>
      )}
    </div>
  )
}

interface ListItemProps {
  link: string
  title: string
}

const ListItem: React.FC<ListItemProps> = ({ link, title }) => {
  return (
    <li className='hover:bg-slate-300 px-4 py-2'>
      <Link href={link}>{title}</Link>
    </li>
  )
}
