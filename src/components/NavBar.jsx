import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className='w-100vw bg-slate-900 text-slate-100'>
      <div className='flex justify-between max-w-6xl m-auto items-center h-20'>
        <NavLink to={"/"} className="ml-5">
          <img src="https://codehelp-shopping-cart.netlify.app/logo.png" alt="" className='h-14'/>
        </NavLink>
        <div className='flex justify-between font-medium gap-x-6 mr-5 '>
          <NavLink to={"/"} className="hover:text-green-400">Home</NavLink>
          <NavLink to={"/cart"} className="relative hover:text-green-400">
            <FaCartShopping className='text-2xl'/>
            {
              items.length>0 &&
              <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-green-600 rounded-full flex justify-center items-center animate-bounce'>{items.length}</div>

            }
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
