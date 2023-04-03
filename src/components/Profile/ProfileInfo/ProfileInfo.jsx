import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://themified.com/friend-finder/images/demo-images/demo-bg.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>);
}

export default ProfileInfo;