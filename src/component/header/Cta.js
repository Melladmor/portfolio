import React from 'react';
import CV from '../../assets/Mellad Mershid.pdf'
const Cta = () => {
    return (
    <div className='cta'>
        <a href={CV} className='btn' download >Download CV</a>
        <a href='#contact' className='btn btn-primary' >Contact</a>
        <div>
        </div>
    </div>
    )
}

export default Cta
