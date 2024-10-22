import Image from 'next/image'

export default function NeovimPage() {
  return (
    <div className='flex flex-col mx-8'>
      <div className='flex self-center items-center gap-2 my-8'>
        <a href='https://neovim.io/' target='_blank'>
          <h1 className='text-4xl text-violet-600'>Neovim</h1>
        </a>
        <Image
          src='/images/neovim.svg'
          alt='neovim icon'
          height={48}
          width={48}
        />
      </div>
      <h2 className='text-2xl text-green-400 mb-8'>
        Neovim is my text editor of choice. I used to use{' '}
        <span className='underline text-violet-600'>
          <a href='https://www.lunarvim.org/' target='_blank'>
            lunarvim
          </a>
        </span>{' '}
        which is an opinionated set of plugins to give you a default, close to
        IDE experience within neovim. I liked it a lot, but wanted to know what
        all my plugins were so I took what I liked and left what I didn&apos;t
        use behind and came up with{' '}
        <span className='underline text-green-400 text-violet-600'>
          <a href='https://github.com/FlippinBerger/nvim/' target='_blank'>
            this config
          </a>
        </span>
        .
      </h2>
      <h2 className='text-2xl text-green-400 mb-8'>
        I have been using vim since ~2015 and am in no way an expert still, but
        I love that it does exactly what I want, is lightweight, and is always
        something that I can work to improve to edit text as efficiently as
        possible. It tickles both my nerd needs and my competitive nature.
      </h2>
      <h2 className='text-2xl text-green-400 mb-8'>
        Coding should be FUN and neovim helps makes it much more fun for me
        beacuse of the reasons above :)
      </h2>
    </div>
  )
}
