import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>);
}

export default Profile;