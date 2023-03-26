import React from 'react'
import './experience.css';
import {AiOutlineHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {TbBrandJavascript} from 'react-icons/tb';
import {TbBrandBootstrap} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {SiReactrouter} from 'react-icons/si';

import {FaPhp} from 'react-icons/fa';
import {SiMysql} from 'react-icons/si';
import {IoLogoNodejs} from 'react-icons/io';
import {AiFillGithub} from 'react-icons/ai';
import {SiFastapi} from 'react-icons/si';
import {GiExplosiveMaterials} from 'react-icons/gi'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSemanticuireact} from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();





const Experience = () => {
    return (
    <section id='experience'>
        <h5>Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>

        <div className='experience__frontend'>
            <h3 data-aos="flip-right" data-aos-duration="2000" >FrontEnd Devlopment</h3>
            <div className='experience__content' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">

            <article className='experience__details'>
                <AiOutlineHtml5/>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
            </article>


            <article className='experience__details'>
                <DiCss3/>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
                <TbBrandJavascript/>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
                <TbBrandBootstrap/>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
                <GiExplosiveMaterials/>
                <h4>Mui</h4>
                <small className='text-light'>intermediate</small>
            </article>

            <article className='experience__details'>
                <SiTailwindcss/>
                <h4>Tailwind</h4>
                <small className='text-light'>intermediate</small>
            </article>




            

            
            <article className='experience__details'>
                <FaReact/>
                <h4>React Hooks</h4>
                <small className='text-light'>intermediate</small>
            </article>

            <article className='experience__details'>
                <SiReactrouter/>
                <h4>React Router</h4>
                <small className='text-light'>intermediate</small>
            </article>

            <article className='experience__details'>
                <SiRedux/>
                <h4>React Redux</h4>
                <small className='text-light'>intermediate</small>
            </article>


            <article className='experience__details'>
                <TbBrandNextjs/>
                <h4>Next Js</h4>
                <small className='text-light'>intermediate</small>
            </article>

            
            </div>
        </div>



        <div className='experience__another' >
            <h3 data-aos="flip-right" data-aos-duration="2000">BackEnd and Another</h3>
            <div className='experience__content' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">

            <article className='experience__details'>
                <SiRedux/>
                <h4>RTK Query</h4>
                <small className='text-light'>intermediate</small>
            </article>

            <article className='experience__details'>
                <SiSemanticuireact/>
                <h4>SWR</h4>
                <small className='text-light'>intermediate</small>
            </article>

            <article className='experience__details'>
                <IoLogoNodejs/>
                <h4>NodeJS</h4>
                <small className='text-light'>intermediate</small>
            </article>

            <article className='experience__details'>
                <AiFillGithub/>
                <h4>Git</h4>
                <small className='text-light'>intermediate</small>
            </article>

            <article className='experience__details'>
                <SiFastapi/>
                <h4>Axios</h4>
                <small className='text-light'>intermediate</small>
            </article>


            
            </div>
        </div>

        </div>
    </section>
    )
}

export default Experience;
