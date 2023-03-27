import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
      <Post message='Hi, how are you?' like_counts='15 likes'/>
      <Post message="It's my first post" like_counts='20 likes' />
      <Post message="Dislike post" dislike_counts ="5 dislikes" />
      </div>
    </div>)
}

export default MyPosts;
