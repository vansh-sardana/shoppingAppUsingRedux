import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item, k}) => {
  const dispatch= useDispatch();
  console.log(item, k);
  return (
      <div className={`${k===0?"":" border-t-2"} border-black flex flex-col max-w-6xl p-10 m-auto md:flex-row gap-5 justify-between items-center`}>
        <div className='flex items-center justify-center w-[30%]'>
          <img src={item.image} className='object-cover'/>
        </div>
        <div className='flex flex-col gap-y-5 md:w-[60%]'>
          <h3 className='text-xl text-slate-700 font-semibold'>{item.title}</h3>
          <p className='text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0,15).join(" ")+" ..."}</p>
          <div className='flex justify-between'>
            <p className='text-green-600 font-semibold '>${item.price}</p>
            <div onClick={()=>{
              dispatch(remove(item.id));
              toast.error("Item removed from cart!");
            }}>
              <div className='w-9 h-9 rounded-full  bg-red-200 hover:bg-red-600 group flex justify-center items-center transition-all duration-300 ease-in-out'>
              <MdDelete className='text-red-600 group-hover:text-white'/>

              </div>
            </div>
          </div>
        </div>

      </div>
      
  )
}

export default CartItem
