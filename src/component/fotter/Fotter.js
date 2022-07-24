import React from 'react';
import './fotter.css';
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs';
const Fotter = () => {
  return (
    <section>
      <footer>
        <div href='/' className='footer__logo'>
        Mellad Morshed
        </div>

        <ul className='links'>
          <li><a href='#header'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>


        <div className='footer__social'>
        <a href='https://github.com/Melladmor' target='_blank' rel="noopener noreferrer"><AiFillGithub/></a>
        <a href='https://www.facebook.com/mellad.morshed.7/' target='_blank' rel="noopener noreferrer"><BsFacebook/></a>
        <a href='https://api.whatsapp.com?phone=+963951427208' target='_balnk' rel="noopener noreferrer"><AiOutlineWhatsApp/></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; Mellad Morshed. All rights reserved</small>
        </div>
      </footer>
    </section>
  )
}

export default Fotter
