import React from 'react'
import { IoMdBasket } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='m-7 w-screen h-14  sticky'>
            <div className='flex pt-2 w-big  fotn-word font-light text-lg items-center  mx-auto justify-between'>
                <div className='hover:opacity-70 cursor-pointer'><Link to='/'><img src='/crown.svg' alt='crown' /></Link></div>
                <ul className='flex uppercase mr-12 items-center justify-center'>
                    <li className='pl-4 cursor-pointer'><Link to='/shop'>shop</Link></li>
                    <li className='pl-4 cursor-pointer'>contact</li>
                    <li className='pl-4 cursor-pointer'>sign in</li>
                    <li className='pl-4 cursor-pointer text-xl '><IoMdBasket className='hover:text-gray-400 text-3xl block font-bold text-gray-300'/></li>
                </ul>            
            </div>           
        </nav>
    )
}

export default Header
