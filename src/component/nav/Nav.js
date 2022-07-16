import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {AiOutlineProject} from 'react-icons/ai';
import {AiOutlineMessage} from 'react-icons/ai';



const Nav = () => {

  const [active , setActive] = useState('#header');


  return (
    <nav>
      <a href='#header' className={active === '#header'?'active':''} onClick={()=>setActive('#header')}><AiOutlineHome/></a>
      <a href='#about' className={active === '#about'?'active':''} onClick={()=>setActive('#about')}><AiOutlineUser/></a>
      <a href='#experience' className={active === '#experience'?'active':''} onClick={()=>setActive('#experience')}><BiBook/></a>
      <a href='#portfolio' className={active === '#portfolio'?'active':''} onClick={()=>setActive('#portfolio')}><AiOutlineProject/></a>
      <a href='#contact' className={active === '#contact'?'active':''} onClick={()=>setActive('#contact')}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav
