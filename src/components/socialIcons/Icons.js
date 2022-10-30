import React from 'react';
import github from '../../assets/github.svg'
import slack from '../../assets/slack.svg'
import './Icons.css'

const Icons = () => {
    return (
        <div className='icons'>
           <a href="https://github.com/kabszac">
                <img src={github} alt="github" />
            </a>
            <a href="https://slack.com">
                <img src={slack} alt="slack" />
            </a> 
        </div>
    );
};

export default Icons;