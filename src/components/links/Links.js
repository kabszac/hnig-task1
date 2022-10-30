import React from 'react';
import Button from '../button/Button';
import './Links.css'

const Links = () => {
    return (
        <div className=' links-class'>
            <Button id='btn__twiiter' link='https://twitter.com/KabuchoIsaac/'>Kabucho Isaac</Button>
            <Button id='btn__zuri' link='https://training.zuri.team/'>Zuri Team</Button>
            <Button id='books' link='http://books.zuri.team '>Zuri Books</Button>
            <Button id='book__python' link='https://books.zuri.team/python-for-beginners?ref_id=<kabuchokuria>,'>Python Books</Button>
            <Button id='pitch' link='https://backgroundcheck.zuri.team'>Background Check for Coders </Button>
            <Button id='book__design' link='https://books.zuri.team/design-rules'>Design Books</Button>

        </div>
    );
};

export default Links;