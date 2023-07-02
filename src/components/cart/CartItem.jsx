import React from 'react'
import {MinusIcon, PlusIcon, TrashIcon} from '@heroicons/react/24/outline'
import {useDispatch} from 'react-redux'
import {setRemoveItemFromCart, setIncreaseItemQTY, setDecreaseItemQTY, setClearItemQTY} from '../../app/CartSlice'
const CartItem = ({item:{id, color, shadow, title, text, img, price, cartQuantity}}) => {

  const item = {id, color, shadow, title, text, img, price, cartQuantity};
const dispatch = useDispatch();
  const onRemoveItem = ()=>{
    dispatch(setRemoveItemFromCart(item));
  }

 const onIncrementItemQTY = ()=>{
  dispatch(setIncreaseItemQTY(item))
 }
 const onDecrementItemQTY = ()=>{
  dispatch(setDecreaseItemQTY(item))
 }




  return (
    <>
    <div className='flex items-center justify-between w-full px-5'>
      <div className=' flex items-center gap-5'>
        <div className={`bg-gradient-to-r ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
          <img src={img} alt={`img/cart` } className=' w-36 h-auto object-fill lg:w-38' />
          <div className='absolute right-1 top-1 blur-theme-effect bg-white text-black rounded text-xs px-1'>
            ${price}
          </div>
          </div>
        <div className='grid items-center gap-4'> 
          <div className='grid items-center leading-none'>
          <h1 className=' font-medium text-lg text-slate-900 lg:text-sm '>{title}</h1>
          <p className=' text-sm text-slate-900 lg:text-xs'>{text}</p>
          </div>
          <div className=' flex items-center justify-around w-full'>
              <button type='button' className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 cursor-pointer' onClick={onDecrementItemQTY}>
                <MinusIcon className=' w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]'/>
                </button>  
              <div type='button' className='bg-theme-cart rounded w-7 h-7 lg:w-6 lg:h-6 flex items-center justify-center text-white'>
                {cartQuantity}
                </div>  
                <button type='button' className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 cursor-pointer' onClick={onIncrementItemQTY}>
                <PlusIcon className='  w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]'/>
                </button>   
          </div>
          </div>
        
      </div>
      <div className='grid items-center gap-5'>
        <div className=' grid items-center justify-center'><h1 className=' text-lg lg:text-base text-slate-900 font-medium'>${price*cartQuantity}</h1></div>
        <div className=''>
        <button type='button' className='bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer' onClick={onRemoveItem}>
                <TrashIcon className='w-5 h-5 text-white'/>
                </button>    
        </div>
      </div>
    </div>
    </>
  )
}

export default CartItem