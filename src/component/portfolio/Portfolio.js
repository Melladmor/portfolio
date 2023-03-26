import React, { useEffect, useState } from 'react'
import './portfolio.css';
import { DATAEN } from '../../data/dataEn';
import AOS from 'aos';
import crud from '../../assets/crud.png';
import employee from '../../assets/employe.png';
import quiz from '../../assets/quiz.png';
import shop from '../../assets/shopcart.png';
import toDo from '../../assets/todoapp.png';
import meme from '../../assets/memegen.png';
import tenzic from '../../assets/tenzic.png';
import code from '../../assets/editor.png';
import radio from '../../assets/radio.png';

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Portfolio = () => {

    const [data , setData] = useState(DATAEN);

    const img = [crud ,employee , quiz , shop , toDo , meme , tenzic , code , radio];

    var count =-1;



    const projects = data.map((el)=>{
        count ++;
        return(
            <article className='portfolio__item' key={el.id} data-aos="zoom-in" data-aos-duration="2000">
                    <div className='portfolio__item-image'>
                    <img src={img[count]} alt={el.name}/>
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
