import React from 'react'
import './about.css'
import ME from '../../assets/CYMERA_٢٠٢٢٠٧٠٣_١٧٥٤٥٤-removebg.png';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
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
                            <small>1+ Years Training on Project Experience</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>15+ Completed Projects</small>
                        </article>
                    </div>

                    <p>
                    Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, CSS, JavaScript, PHP OOP, MySQL. Strong background in project management 
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        
        </section>
    )
}

export default About
