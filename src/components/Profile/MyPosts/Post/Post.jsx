import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg' />
      {props.message} <br />
      {props.like_counts}
      {props.dislike_counts}

    </div>)
}

export default Post;