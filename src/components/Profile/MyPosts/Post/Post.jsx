import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg' />
      {props.message}
      <div>
      {props.like_counts}
      </div>
      <div>
        {props.dislike_counts}
      </div>
    </div>)
}

export default Post;