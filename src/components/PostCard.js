import React from 'react';

const PostCard = ({post}) => {
    return (
        <div>
            {post.title}
            <button>Favorite</button>
        </div>
    )
}

export default PostCard