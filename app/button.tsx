'use client'
import { Button } from 'react-aria-components'
import * as motion from 'framer-motion/client'

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const Buttin: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <motion.div
        whileHover={{
          scale: 1.4,
        }}
        className='hidden sm:block'
      >
        <Button className='p-2 bg-violet-600 rounded-2xl text-xl'>
          {children}
        </Button>
      </motion.div>
      <Button className='sm:hidden p-2 bg-violet-600 rounded-2xl text-xl'>
        {children}
      </Button>
    </div>
  )
}

export default Buttin
