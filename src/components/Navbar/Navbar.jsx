import React from 'react'
import Logo from "../../assets/logo.png"
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import Darkmode from './Darkmode'

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>

      { /*upper Navbar*/ }
      <div className='bg-primary/40 py-2 '>
        <div className='container flex justify-between items-center'>
            <div>
                <a href="#" 
                className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={Logo} alt="Logo" 
                    className='w-10 uppercase'/>
                    Shopsy
                </a>
            </div>
            {/* search bar and order button */}
            <div className='flex justify-between items-center gap-4'>
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='search' 
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full 
                    border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'/>
                    <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
            </div>
            {/* order button */}
            <button
            onClick={() => alert("Ordering not available yet")}
            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4
            rounded-full flex items-center gap-3 group'
            >
                <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
            {/*Darkmode Sitch*/}
            <div>
                <Darkmode />
            </div>
        </div>
      </div> 
       { /*lower Navbar */}
      <div></div>

    </div>
  )
}

export default Navbar
