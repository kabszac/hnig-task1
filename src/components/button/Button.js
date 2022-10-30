import React from 'react';
import './Button.css'

const Button = ({id, link, children}) => {
    return (
        <a id={id} href={link} className='button-link'> 
            {children}
        </a>
    );
};

export default Button;