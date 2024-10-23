'use client'

import * as motion from 'framer-motion/client'
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from '@remixicon/react'

export default function Footer() {
  const duration = 0.4
  const iconSize = 36

  return (
    <motion.div
      className='flex gap-2 px-4 py-2 rounded-2xl bg-violet-600 mx-auto mb-4'
      animate={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ duration: duration }}
    >
      <motion.div
        whileHover={{
          scale: 1.3,
        }}
      >
        <a href='https://github.com/FlippinBerger/' target='_blank'>
          <RiGithubFill size={iconSize} />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.3,
        }}
      >
        <a
          href='https://www.linkedin.com/in/christopher-berger-76b2848a/'
          target='_blank'
        >
          <RiLinkedinBoxFill size={iconSize} />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.3,
        }}
      >
        <a href='mailto:flippinberger@gmail.com' target='_blank'>
          <RiMailLine size={iconSize} />
        </a>
      </motion.div>
    </motion.div>
  )
}
