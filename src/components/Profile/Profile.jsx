import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>);
}

export default Profile;