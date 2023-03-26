import React from 'react';
import s from './Post.module.css';


const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg' />
      post 1
      <div>
        <spam>like</spam>
      </div>
    </div>)
}

export default Post;