import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post({ profilePic, image, userName, timestamp, message }) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post_avatar' />
                <div className='post__topInfo'>
                    <h3>{userName}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='post__bottom'>
                <p>{message}</p>
            </div>
            <div className='post__image'>
                <img src={image} alt='' />
            </div>
        </div>
    );
}

export default Post;