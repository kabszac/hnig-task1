import React from 'react';
import zuri from '../../assets/zuri.svg'
import i4g from '../../assets/I4G.svg'
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
           <img src={zuri} alt="zuri" /> 
           <p>HNG Internship 9 Frontend Task</p>
           <img src={i4g} alt="i4g" />
        </div>
    );
};

export default Footer;