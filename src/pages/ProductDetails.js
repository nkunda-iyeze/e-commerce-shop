import React, { useContext } from 'react';
// importing useParams 
import { useParams } from 'react-router-dom';
// importing CartContext
import { CartContext } from '../contexts/CartContext';
// importing PRoductContext
import { ProductContext } from '../contexts/ProductContext';


const ProductDetails = () => {
  // get the product id from the url
  const {id} = useParams();

  // products from ProductContext
  const {products} = useContext(ProductContext);
  // add to cart function 
  const {addToCart} = useContext(CartContext)
  // getting a single product  based on the url id 
  const product = products.find(product => product.id === parseInt(id));
  // if product  not found
  
  if(!product) {
    return (
      <section className='md:h-screen flex items-center justify-center h-full'>
        <p>Is Loading ....</p>
      </section>
    )
  } else {
  // destructing the product
  const {image,price,title,description} = product;
  
  return <section className='pt-12 pb-12 lg:py-32  h-screen flex items-center'> 
    <div className='container mx-auto'>
      {/* image and text wrapper */}
      <div className='flex flex-col lg:flex-row items-center'>
        {/* image div*/}
        <div className='flex flex-1 items-center justify-center mb-8 lg:mb-0 '>
              <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
        </div>
        {/* text div */}
        <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-26px   mb-12 max-w-[450px] font-medium mx-auto lg:mx-0'>
              {title}
            </h1>
            <div className='text-red-400 text-xl font-medium mb-6 '>
              $ { price}
            </div>
            <p className='mb-8 max-w-[500px] text-center md:max-w-full lg:text-left'>
              {description}
            </p>
            <button className='bg-primary text-white py-4 px-6 rounded-md hover:text-primary hover:bg-slate-300 mb-36' onClick={()=>{addToCart(product,product.id)}}>Add To cart</button>
        </div>
      </div>
    </div> 
    </section>;
  }
};

export default ProductDetails;
