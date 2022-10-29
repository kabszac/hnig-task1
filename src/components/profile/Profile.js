import React from 'react';
import profile from '../../assets/profile.svg'
import icon from '../../assets/Icon.svg'

const Profile = () => {
    return (
        <div>
           <div className="profile-part">
            <img src={profile} alt="profile"  id='‘profile__img'/> 
            <p id='twitter'> Kabucho Isaac</p>
            <p id='slack'>Isaac Kuria</p>
           </div>
           <div className="share-link">
            <img src={icon} alt="share" />
           </div>
        </div>
    );
};

export default Profile;
