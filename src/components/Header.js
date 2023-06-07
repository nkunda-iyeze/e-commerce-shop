import React, { useContext, useState } from 'react';
// import SidebarContext
import { SidebarContext } from '../contexts/SidebarContext';
// import  react icons
import {
  BsBag
} from 'react-icons/bs'
// import Cart context 
import { CartContext } from '../contexts/CartContext';
// import Logo
import Logo from '../img/logo.svg'
// import Link from react-router-dom
import { Link } from 'react-router-dom';
const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  const {itemAmount } = useContext(CartContext)
  // Header State 
  const [isActive,setIsActive] = useState(false)
  // set isActive on scroll (event listener)
  window.addEventListener('scroll',()=>{
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
  });
  return(
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"}  w-full fixed z-10 transition-all`}>
      <div className='container mx-auto flex justify-between items-center  h-full'>
      {/* logo */}
    <Link to={'/'}>
      <img src={Logo} alt=""  className='w-[30px]'/>
    </Link>
    {/* cart */}
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsBag className='text-2xl '/>
      {/* item amount */}
    <div className='bg-red-700 text-[12px] w-[18px] h-[18px] text-white flex justify-center items-center rounded-full absolute -right-2 -bottom-2'>
      {itemAmount}
    </div>
    </div>
      </div>
    </header>
  )
};

export default Header;
