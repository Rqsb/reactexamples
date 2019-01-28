import React from 'react';

const PostContent = ({post}) => {
    return <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <span>This article was written by {post.author}</span>
    </div>
}

export default PostContent;