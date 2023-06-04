import React, { createContext, useState } from 'react';

// create context
export const CartContext  = createContext();

const CartProvider = ({children}) => {
// create cart state
  const [cart,setCart]= useState([]);
  // add to cart function 
  const addToCart = (product,id)=> {
    const newItem = {...product,amount:1}
    // check if  item already exists in cart
    const cartItem = cart.find(item => {
      return item.id === id;
    });
    // if the item is already in cart
    if (cartItem) {
      const newCart = [...cart].map(item =>{
        if(item.id === id) {
          return {...item,amount:cartItem.amount+1}
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart,newItem]);
    }
   
  }
  console.log(cart);
  return <CartContext.Provider value={{addToCart,cart}}>{
    children
    }</CartContext.Provider>;
};

export default CartProvider;
