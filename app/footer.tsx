'use client'

import * as motion from 'framer-motion/client'
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from '@remixicon/react'
import { Link as AriaLink } from 'react-aria-components'

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
        <AriaLink
          href='https://github.com/FlippinBerger/'
          target='_blank'
          className='data-[focused]:outline-none data-[focus-visible]:outline-white'
        >
          <RiGithubFill size={iconSize} />
        </AriaLink>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.3,
        }}
      >
        <AriaLink
          href='https://www.linkedin.com/in/christopher-berger-76b2848a/'
          target='_blank'
          className='data-[focused]:outline-none data-[focus-visible]:outline-white'
        >
          <RiLinkedinBoxFill size={iconSize} />
        </AriaLink>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.3,
        }}
      >
        <AriaLink
          href='mailto:flippinberger@gmail.com'
          target='_blank'
          className='data-[focused]:outline-none data-[focus-visible]:outline-white'
        >
          <RiMailLine size={iconSize} />
        </AriaLink>
      </motion.div>
    </motion.div>
  )
}
