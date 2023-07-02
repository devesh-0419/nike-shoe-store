import React, { useEffect } from 'react'
import {setCloseCart, selectCartState, selectCartItems, setClearItemQTY, selectTotalAmount,selectTotalQuantity, setGetTotal}from '../app/CartSlice.js'
import CartCount from "./cart/CartCount";
import CartItem from "./cart/CartItem";
import CartEmpty from "./cart/CartEmpty";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState)
    const cartItems = useSelector(selectCartItems)
    const totalAmount = useSelector(selectTotalAmount)
    const totalQuantity = useSelector(selectTotalQuantity)

    useEffect(()=>{
        dispatch(setGetTotal())
    },[cartItems,dispatch])
    
    const onCartToggle = ()=>{
        dispatch(setCloseCart({
            cartState:false
        }))
    };

    const onClearCartItems = ()=>{
        dispatch(setClearItemQTY());
    }
  return (
    <>
    <div className={` fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState?' opacity-100 visible translate-x-0':'translate-x-8 opacity-0 invisible '}`}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 `}>
            <CartCount totalQuantity={totalQuantity} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
            {cartItems?.length===0? <CartEmpty onCartToggle={onCartToggle} />: <div>
                <div className=' flex items-start flex-col justify-start gap-y-7 lg:gap-y-5 overflow-y-scroll h-[80vh] scroll-smooth scroll-hidden py-3'>
                {cartItems?.map((item, i)=>{
                    return <CartItem key={i} item={item}/>;
                })}
                </div>
                <div className=' fixed bottom-2 bg-white w-full px-5 py-2 gird items-center'>
                    <div className='flex items-center justify-between'>
                      <h1 className='text-base font-semibold uppercase'>SubTotal</h1>  
                      <h1 className='text-sm rounded bg-theme-cart text-white px-2 py-0.5'>{totalAmount}</h1>  
                    </div>
                    <div className= 'grid items-center gap-2'>
                        <p className='text-sm font-medium text-center'>Taxes and Shipping will Calculated At Shiping</p>
                        <button className=' text-slate-100 bg-theme-cart rounded button-theme'>CheckOut</button>
                    </div>
                </div>

                </div>}
           
           
        </div>
    </div>
    </>
  )
}

export default Cart      