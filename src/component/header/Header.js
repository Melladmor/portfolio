import React from 'react'
import Cta from './Cta';
import './header.css'
// import ME from '../../assets/PicsArt_07-17-08.48.41-removebg-preview.png'
import ME from '../../assets/logo.jpg'

import HeaderSocial from './HeaderSocial';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Mellad Morhsed</h1>
        <h5 className='text-light'>FrontEnd Devloper</h5>
        <Cta/>
        <HeaderSocial/>


        <div className='me'>
        <img src={ME} alt='myImg' />
        </div>
        <a href='#header' className='scroll__top'><BsFillArrowUpCircleFill/></a>
        <a href='#contact' className='scroll__down'><BsFillArrowDownCircleFill/></a>
        
      </div>
    </header>
  )
}

export default Header;
