import React, { createContext, useEffect, useState } from 'react';

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
  // remove from cart list
  const removeFromCart=(id)=>{
        const newCart = cart.filter(item => {
         return  item.id !== id;
        });
        setCart(newCart)
  }
  // clear Cart 
  const clearCart = ()=>{
    alert('Are you sure you want to remove all the items from the cart?');
    setCart([]);
  }
  // increase amount of items
  const increaseAmount = (id)=>{
    const cartItem =  cart.find((item)=> item.id === id);
    addToCart(cartItem,id);
  }
  // decrease amount of items
  const decreaseAmount = (id)=>{
    const cartItem = cart.find((item)=> item.id === id);
    if(cartItem){
      const newItem = cart.map((item)=>{
        if(item.id === id){
          return {...item,amount: cartItem.amount - 1}
        } else {
          return item;
        }
      });
      setCart(newItem)
    } 
      if(cartItem.amount < 2){
        removeFromCart(id)
      
    }
  }
  // Item amount state
  const [itemAmount,setItemAmount]= useState(0)
// update item amount
 useEffect(()=>{
  if(cart){
    const amount = cart.reduce((accumurator,currentItem)=>{
        return accumurator + currentItem.amount;
    },0);
    setItemAmount(amount);
  }
},[cart])

// Set Total Price state
  const [totalPrice,setTotalPrice]= useState(0);
  useEffect(() =>{
    if(cart){
      const price = cart.reduce((accumurator,currentItem)=>{
        return accumurator + currentItem.price * currentItem.amount;
      },0);
      setTotalPrice(price);
    }
  },[cart])

  return <CartContext.Provider value=
  {{
    addToCart,
    cart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    totalPrice
  
  }}>{
    children
    }</CartContext.Provider>;
};

export default CartProvider;
