import React from 'react'
import Header from '../component/header/Header';
import Nav from '../component/nav/Nav';
import About from '../component/about/About';
import Experience from '../component/experience/Experience'
import Portfolio from '../component/portfolio/Portfolio';
import Contact from '../component/contact/Contact';
import Fotter from '../component/fotter/Fotter';



const LayoutEn = () => {
    return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Fotter/>
    </div>
    )
}

export default LayoutEn
