import React,{useRef} from 'react'
import './contact.css';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {HiOutlineMail} from 'react-icons/hi';
import emailjs from 'emailjs-com'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {


        const form = useRef();
        const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b57r83c', 'template_eqeu0ab', form.current, '9iagT2BoR9BMYkImg')
            .then((result) => {
                toast.success('Message Send',{autoClose:1000})
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                toast.warn('Somthing Rong',{autoClose:1000})
                console.log(error.text);
                e.target.reset();
            });
        };

    return (
        <section id='contact'>
            <ToastContainer/>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>

                <div className='contact__options' data-aos="flip-right" data-aos-duration="2000">
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__icon'/>
                        <h4>Email</h4>
                        <h5>melladmrshid@gmail.com</h5>
                        <a href='mailto:melladmrshid@gmail.com'>Send a message</a>
                    </article>


                    <article className='contact__option' data-aos="flip-right" data-aos-duration="2000">
                        <RiMessengerLine className='contact__icon'/>
                        <h4>Messenger</h4>
                        <h5>Facebook</h5>
                        <a href='https://m.me/mellad.morshed.7' target='_blank' rel="noopener noreferrer">Send a message</a>
                    </article>

                    <article className='contact__option' data-aos="flip-right" data-aos-duration="2000">
                        <AiOutlineWhatsApp className='contact__icon'/>
                        <h4>Whats App</h4>
                        <h5>+963951427208</h5>
                        <a href='https://api.whatsapp.com?phone=+963951427208' target='_blank' rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input 
                    type='text' 
                    name='name'
                    placeholder='Your Full Name'
                    required
                    data-aos="zoom-in" data-aos-duration="2000"
                    />

                    <input 
                    type='email' 
                    name='email'
                    placeholder='Your Email'
                    required
                    data-aos="zoom-in" data-aos-duration="2000"

                    />

                    <textarea 
                    name='message' 
                    required
                    placeholder='Your Message'
                    rows={7}
                    data-aos="zoom-in" data-aos-duration="2000"

                    >
                    </textarea>
                    <button type='submit' className='btn btn-primary' data-aos="zoom-in" data-aos-duration="2000">Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact
