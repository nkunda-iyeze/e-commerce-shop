import React, { useContext } from 'react';
// import Link from React dom
import { Link } from 'react-router-dom';
// import icons from react
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';
const CartItem = ({item}) => {
  // destructure from item object
  const {id,title,price,image,amount} = item;
  // Removefrom cart function
  const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
        <div className='w-full min-h-[150px] flex items-center  gap-x-4'>
          {/* image */}
          <Link to={`/product/${id}`}>
            <img src={image} alt="INF"  className='max-w-[80px]'/>
          </Link>
        <div className='w-full flex flex-col'>
          {/* Title and remove Icon */}
        <div className='flex justify-between mb-2'>
          {/* title */}
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}
          </Link>
          {/* icon */}
            <div className='text-xl cursor-pointer' onClick={() => removeFromCart(id)} >
                <IoMdClose className='text-gray-500 hover:text-red-500'/>
            </div>
        </div>

        <div className='flex h-[36px] gap-x-2 items-center'> 
          {/* quantity */}
          <div  className='flex flex-1 max-w-[100px] h-full items-center border text-primary font-medium '>
            {/* minus icon */}
            <div onClick={()=>decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer h-full w-full' >
              <IoMdRemove />
            </div>
            {/* Amount */}
              <div className='flex flex-1 justify-center items-center h-full px-2'>
                {amount}
              </div>
              {/* Plus icon */}
              <div onClick={()=>increaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer h-full'>
                <IoMdAdd/>
              </div>
          </div>
          {/* price */}
          <div className='flex flex-1 justify-around'>
            $ {price}
          </div>
          {/* Final Price */}
          {/* make price at 2 decimal */}
          <div className='flex-1 flex justify-end items-center font-medium text-primary'>
              {`$ ${parseFloat( price * amount).toFixed(2)} `}
          </div>
        </div>
        </div>
        </div>
    </div>;
};

export default CartItem;
