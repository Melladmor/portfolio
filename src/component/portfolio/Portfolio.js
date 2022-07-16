import React, { useState } from 'react'
import './portfolio.css';
import { DATAEN } from '../../data/dataEn';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Portfolio = () => {

    const [data , setData] = useState(DATAEN);



    const projects = data.map((el)=>{
        return(
            <article className='portfolio__item' key={el.id} data-aos="zoom-in" data-aos-duration="2000">
                    <div className='portfolio__item-image'>
                    <img src={el.img} alt={el.name}/>
                    </div>
                    <h3>{el.name}</h3>
                    <h4>{el.description}</h4>
                    <a href={el.repository} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                    <a href={el.livedemo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
            </article>
        )
    })
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container' >
                {projects}
            </div>
        </section>
    )
}

export default Portfolio
