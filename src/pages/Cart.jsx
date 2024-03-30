import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem'

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice]= useState(0);
  

  useEffect(()=>{
    setTotalPrice( items.reduce( (acc, curr)=> acc+curr.price, 0) );
  }, [items]);
  return (
    <div className='flex w-full justify-center items-center grow'>
      {
        items.length > 0 ? (
          <div className='flex flex-col justify-between max-w-6xl md:flex-row relative'>
            <div className='flex flex-col md:w-[57%]'>
              {
                items.map((item, index) => (
                  <CartItem item={item} key={index} k={index}/>
                ))
              }
            </div>
            <div className='flex flex-col md:w-[38%] justify-between py-20 w-full p-10 md:px-0 h-[80vh]'>
              <div>
                <h3 className='uppercase text-green-800 text-xl font-semibold'>Your Cart</h3>
                <h2 className='uppercase text-green-800 text-5xl font-semibold'>Summary</h2>
                <p className='text-xl font-semibold text-gray-700 mt-5'>Total Items: <span className='font-bold text-black'>{items.length}</span></p>
              </div>
              <div>
                <p className='text-xl font-semibold text-gray-700'>Total Amount: <span className='font-bold text-black'>${totalPrice}</span></p>
                <button className="bg-green-700 rounded-lg px-20 py-4 mt-5 text-white uppercase font-bold text-xl w-full hover:text-green-600 duration-200 hover:bg-purple-50 hover:border-2 hover:border-green-600">Checkout Now</button>
              </div>
            </div>
          </div>
        ) :
          <div className='flex flex-col justify-center items-center gap-8'>
            <h2 className='font-bold text-xl text-slate-600'>Your Cart is Empty!</h2>
            <NavLink to={"/"} className="bg-green-600 rounded-lg px-12 py-4 text-white uppercase font-semibold">Shop Now</NavLink>
          </div>
      }
    </div>
  )
}

export default Cart
