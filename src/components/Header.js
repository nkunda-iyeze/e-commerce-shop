import React, { useContext } from 'react';
// import SidebarContext
import { SidebarContext } from '../contexts/SidebarContext';
// import  react icons
import {
  BsBag
} from 'react-icons/bs'
const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  return(
    <header className='bg-blue-400'>
    <div>
      Header
    </div>
    <div onClick={()=>setIsOpen(!isOpen)}>
      <BsBag className='text-2xl cursor-pointer flex relative'/>
    </div>
    </header>
  )
};

export default Header;
