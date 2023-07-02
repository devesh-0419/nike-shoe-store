import React from 'react'
import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import {useDispatch,useSelector} from 'react-redux'
import logo from '../assets/logo.png'
import { setOpenCart,selectTotalQuantity } from '../app/CartSlice';
const Navbar = () => {


  const totalQuantity = useSelector(selectTotalQuantity)

    const dispatch = useDispatch();
    const onCartToggle = ()=>{
        dispatch(setOpenCart({
            cartState:true
        }))
    };
  return (
    <>
    <header className=' absolute top-7 left-0 right-0 opacity-100 z-50'>
        <nav className='flex items-center justify-between nike-container'>
            <div className='flex items-center'>
                <img src={logo} alt="" className='w-16 h-auto'/>
            </div>
            <ul className='flex items-center justify-center gap-2'>
                <li className='grid items-center'>
                   <MagnifyingGlassIcon className='icon-style'/> 
                </li>
                <li className='grid items-center'>
                   <HeartIcon className='icon-style'/>
                </li>
                <li className='grid items-center'>
                  <button type='button' onClick={onCartToggle} className=' border-none outline-none active:scale-110 transition-all duration-300 relative'>
                    <ShoppingBagIcon className='icon-style'/>
                    <div className={` absolute right-0 top-4 bg-white to-slate-900 w-4 h-4 text=[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}>{totalQuantity}</div>
                  </button>
                </li>
                {/* <li className='grid items-center'>
                  <button type='button' className=' border-none outline-none active:scale-110 transition-all duration-300 relative'>
                    <div className='button-theme bg-gradient-to-t from-gray-500 to-gray-50'>Login</div>
                  </button>
                </li> */}
            </ul>
        </nav>
    </header>
    </>
    
  )
}

export default Navbar