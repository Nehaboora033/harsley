import React from 'react'
import logo from '../../public/images/logo.png'
import { FiShoppingBag } from 'react-icons/fi'

const Nabar = ({ className }) => {
    return (
        <div className={`max-w-285 mx-auto px-3 flex items-center justify-between p-2 ${className}`}>
            <a href="" className='w-11.25'>
                <img src={logo} alt="llogo" className='w-12.5' />
            </a>
            <div className='flex items-center gap-4 w-full justify-center text-[20px] text-white'>
                <a href="">Motercycles</a>
                <a href="">Shop</a>
                <a href="">Events</a>
                <a href="">About</a>
            </div>
            <FiShoppingBag size={24} color='white' />
        </div>
    )
}

export default Nabar