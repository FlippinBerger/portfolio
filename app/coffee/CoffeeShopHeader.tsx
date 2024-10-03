import { RiShoppingCartFill } from '@remixicon/react'
import NavMenu from './NavMenu'

export default function CoffeeShopHeader() {
  return (
    <div className='p-4 flex justify-between items-center bg-indigo-600 h-36'>
      <NavMenu />
      <h1 className='text-4xl'>Local Beans</h1>
      <div className=''>
        <RiShoppingCartFill size={36} />
      </div>
    </div>
  )
}
