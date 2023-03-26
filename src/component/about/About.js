import React from 'react'
import './about.css'
// import ME from '../../assets/IMG-20220717-WA0033-1-removebg-preview.png';
import ME from '../../assets/image.jpg';

import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {


    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about__container' >

                <div className='about__me' data-aos="fade-down"  data-aos-duration="1500">
                    <div className='about__me-image' >
                        <img src={ME} alt='aboutimg'/>
                    </div>
                </div>

                <div className='about_content' >
                    <div className='about__cards' data-aos="fade-down"  data-aos-duration="1500">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Two years of experience working on projects (training projects - work in a company)</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>20+ Completed Projects</small>
                        </article>
                    </div>

                    <p>
                    Web Developer specializing in front end development. Experience with all stages of the development cycle for dynamic web projects. I have good experince with react framework and other tools using with it,
            recently i have been starting work with nextjs. Strong background in project management
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        
        </section>
    )
}

export default About
