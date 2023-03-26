import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a 
            href='https://github.com/Melladmor' target='_blank' 
            rel="noopener noreferrer" >
            <AiFillGithub />
            </a>

            <a 
            href='https://www.facebook.com/mellad.morshed.7/' 
            target='_blank' rel="noopener noreferrer" >
            <BsFacebook />
            </a>

            <a 
            href='https://api.whatsapp.com?phone=+963951427208' 
            target='_balnk' rel="noopener noreferrer">
            <AiOutlineWhatsApp />
            </a>


        </div>
    )
}

export default HeaderSocial
