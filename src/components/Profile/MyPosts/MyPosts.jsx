import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let postsData = [
        {id:1, message:'Hi how are you?', likesCount:12},
        {id:2, message:"It's my first post", likesCount: 20},
        {id:3, message: 'Dislike post', dislikesCount: '5 dislikes'}
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
    <div className={s.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        <Post message={postsData[2].message} dislikesCount={postsData[2].dislikesCount} />
    </div>
</div>)
}

export default MyPosts;
