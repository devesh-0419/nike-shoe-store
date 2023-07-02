import React from 'react'
import{XMarkIcon, ChevronDoubleLeftIcon}from '@heroicons/react/24/solid'
const CartCount = ({onCartToggle, onClearCartItems,totalQuantity}) => {
  return (
    <>
    <div className='flex items-center justify-between bg-white h-11 px-3 sticky top-0 left-0 right-0'>
        <div className='flex items-center gap-3'>
            <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
                <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]'/>
            </div>
            <div className='grid items-center'>
                <h1 className=' text-base font-medium text-slate-900'>Your Cart  <span className='bg-theme-cart text-slate-100 rounded px-1 py-0.5 font-normal text-xs'>({totalQuantity} Item)</span></h1>
               
            </div>
        </div>
        <div className=' flex items-center'>
            <button type='button' className='bg-theme-cart rounded active:scale-90 p-0.5' onClick={onClearCartItems}>
                <XMarkIcon className=' w-5 h-5 text-white stroke-[2]'/>
            </button>
        </div>
    </div>
    </>
  )
}

export default CartCount