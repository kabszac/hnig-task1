import React from 'react';
import Footer from '../footer/Footer';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <div className="contact-title">
                    <h1>Contact Me</h1>
                </div>
                <div className="contact-text">
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div> 
                <form action="">
                    <div className="contact-name">
                        <div className="first">
                            <label htmlFor="first_name">First name</label> <br />
                            <input 
                                type="text" 
                                id='first_name' 
                                name='firstName' 
                                placeholder='Enter your first name' 
                            />
                        </div>
                        <div className="">
                            <label htmlFor="last_name">Last name</label> <br />
                            <input 
                                type="text" 
                                id='last_name' 
                                name='lastName' 
                                placeholder='Enter your last name' 
                            />
                        </div>
                    </div>
                    <div className="contact-email">
                        <label htmlFor="email">Email</label><br />
                        <input 
                            type="email" 
                            id='email'
                            name='email'
                            placeholder='yourname@email.com' />
                    </div>
                    <div className="contact-message">
                        <label htmlFor="message">Message</label><br />
                        <textarea 
                            name="textArea" 
                            id="message"  
                            placeholder="Send me a message and I'll reply to you as soon as possible" 
                            required 
                            requiredTxt='please enter a message' />
                        
                    </div>
                    <div className="">
                        <input type="checkbox" id='checkbox'  />
                        <label htmlFor="checkbox">You agree to providing your data to kabucho who may contact you.</label>
                    </div>
                    <button type='submit' id='btn__submit'> Send Message</button>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;