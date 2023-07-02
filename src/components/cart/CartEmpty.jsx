import React from 'react'
import {ArrowLeftIcon} from '@heroicons/react/24/solid'
import emptybag from '../../assets/emptybag.png'
const CartEmpty = ({onCartToggle}) => {
  return (
  <>
  <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
    <img src={emptybag} alt="emptybag/img"  className=' w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'/>
    <button type='button' className='flex items-center justify-center py-2 gap-3 text-sm px-5 button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 font-semibold active:scale-110' onClick={onCartToggle}>
    <ArrowLeftIcon className='w5
     h-5 to-slate-900'/>
    <span className=''>Back to Nike Store</span>
    </button>
  </div>
  </>
  )
}

export default CartEmpty