import React, {useState} from 'react';
import profile from '../../assets/profile.svg'
import icon from '../../assets/Icon.svg'
import phone  from '../../assets/phone.svg'
import hover from '../../assets/hover.svg'
import './Profile.css'

const Profile = () => {
    const [over, setOver] = useState(false)
    return (
        <div className='profile'>
           <div className="profile-part">
            <img src={over? hover: profile} alt="profile"  id='‘profile__img' onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)}/> 
            <p id='twitter'> Kabucho Isaac</p>
            <p id='slack'>Isaac Kuria</p>
           </div>
           <div className="share-link web">
            <img src={icon} alt="share" />
           </div>
           <div className="share-link phone">
            <img src={phone} alt="phone" />
           </div>
        </div>
    );
};

export default Profile;
