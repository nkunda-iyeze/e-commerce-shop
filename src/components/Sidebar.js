import React, { useContext } from 'react';
// import Link 
import {Link} from 'react-router-dom'
// import Icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
// import Components
import CartItem from '../components/CartItem'
// import sideBard ContextComponent
import { SidebarContext } from '../contexts/SidebarContext';
// import CartContext from '../contexts/CartContext';
import {CartContext} from '../contexts/CartContext';

function Sidebar() {

  const {isOpen,handleClose} = useContext(SidebarContext);
  const {cart} = useContext(CartContext);
  return (
  <div className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white top-0 fixed shadow-2xl md:w-[35vw] xl:max-w-[30vw] transtion-all duration-300 z-20 px-4`}>
    <div className='flex justify-between items-center py-6 border-b'>
      <div className='uppercase font-semibold'> shoping Bag {0}</div>
      <div className='flex w-8 h-8 cursor-pointer justify-center items-center' onClick={handleClose}>
        <IoMdArrowForward className='' />
      </div>
    </div>
    <div>{
      cart.map(item =>{
        return <CartItem item={item} key={item.id}/>
      })}
    </div>
  </div>);
}

export default Sidebar;
