import React, {useContext}from 'react';
// import CartContext
import {CartContext} from '../contexts/CartContext';
// import Link
import { Link } from 'react-router-dom';
// import icons
import {BsPlus,BsEyeFill} from 'react-icons/bs'
const Product = ({product}) => {
  // console.log(product)
  // Destructuring Product
  const {id,image,category,price,title} = product
  const {addToCart} = useContext(CartContext)
  return (
  <div>
    <div className='border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* image */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img src={image} alt="INF"  className='max-h-[160px] group-hover:scale-110 transition duration-300'/>
        </div>
      </div>
      {/* buttons */}
      <div className='absolute p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all top-0 -right-11 group-hover:right-0'>
        <button onClick={()=> addToCart(product,id)}>
          <div className='flex justify-center items-center text-white w-12 h-12 bg-red-700'>
            <BsPlus className='text-3xl'/>
          </div>
        </button>
        <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
          <BsEyeFill/>
        </Link>
      </div>
    </div>
    {/* Category, Title and Price */}
    <div>
      <div>
        <div className='text-sm text-gray-500 mb-1 capitalize'>{category} </div>
          <Link to={`/product/${id}`}> <h2 className='font-semibold mb-1'>{title} </h2> </Link>
        <div className='font-semibold'>{price} </div>
      </div>
    </div>
  </div>
    );
};

export default Product;
