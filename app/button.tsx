'use client'
import { Button } from 'react-aria-components'
import * as motion from 'framer-motion/client'

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const Buttin: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.4,
      }}
    >
      <Button className='p-2 bg-violet-600 rounded-2xl text-xl'>
        {children}
      </Button>
    </motion.div>
  )
}

export default Buttin
