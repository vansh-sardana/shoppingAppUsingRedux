import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { add, remove } from '../redux/slices/CartSlice';

const Card = ({post}) => {
    const {cart}= useSelector((state)=> state);
    const dispatch= useDispatch();
    
    function addHandler(){
        dispatch(add(post));
        toast.success("Item added to cart!");
    }
    function removeHandler(){
        dispatch(remove(post.id));
        toast.error("Item removed from cart!");
    }

    const [selected,setSelected]= useState(false);
    return (
        <div className='group flex flex-col justify-center items-center hover:scale-110 transition-all duration-300 ease-in shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg gap-3 p-4 mt-10 ml-5 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
            <h3 className='text-gray-700 font-semibold text-lg w-40 truncate mt-1'>{post.title}</h3>
            <p className='w-40 text-normal text-gray-400 text-[10px]'>{post.description.split(" ").slice(0,10).join(" ")+" ..."}</p>
            <img src={post.image} className='h-[180px]'/>
            <div className='flex flex-row justify-between gap-11 mt-5 w-full items-center'>
                <p className='text-green-600 font-semibold'>${post.price}</p>
                {
                cart.some((p)=> p.id===post.id )? 
                <button onClick={removeHandler} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase py-1 px-3 group-hover:bg-gray-700 group-hover:text-white transition-all duration-300 ease-in-out'>Remove Item</button>
                : 
                <button onClick={addHandler} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase py-1 px-3 group-hover:bg-gray-700 group-hover:text-white transition-all duration-300 ease-in-out'>Add to Cart</button>}
                
            </div>

        </div>
    )
}

export default Card
