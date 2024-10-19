'use client'
import { Button } from 'react-aria-components'

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const Buttin: React.FC<Props> = ({ children }) => {
  return (
    <Button className='bg-violet-600 rounded-2xl text-xl'>{children}</Button>
  )
}

export default Buttin
