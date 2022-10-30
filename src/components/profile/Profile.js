import React from 'react';
import profile from '../../assets/profile.svg'
import icon from '../../assets/Icon.svg'
import phone  from '../../assets/phone.svg'
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile'>
           <div className="profile-part">
            <img src={profile} alt="profile"  id='‘profile__img'/> 
            <p id='twitter'> Kabucho Isaac</p>
            <p id='slack'>Isaac Kuria</p>
           </div>
           <div className="share-link">
            <img src={icon} alt="share" />
           </div>
           <div className="share-link-phone">
            <img src={phone} alt="phone" />
           </div>
        </div>
    );
};

export default Profile;
