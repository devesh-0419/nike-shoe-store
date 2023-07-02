import React from 'react'
import {XMarkIcon} from '@heroicons/react/24/outline'
const Login = () => {
  return (
    <>
    <div className={` fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] grid items-center justify-items-center`}>
        <div className='absolute bg-theme w-[40%] h-[70%] sm:w-[25rem] sm:h-[35rem] rounded-lg'>
            <div className='flex items-center justify-around p-1'>
                <h1 className='font-bold text-[2rem] '>Login</h1>
            <button type='button' className='absolute right-0 bg-white/20 p-0.5 m-1 rounded cursor-pointer active:scale-110'>
            <XMarkIcon className='w-5 h-5'/>
           </button>
            </div>

            
           
           
        </div>
    </div>
    </>
  )
}

export default Login