import React from 'react';

const PostCard = ({post}) => {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__header">{post.title}</div>
                    <div>
                        {post.content}
                        {post.link}
                        <button className="card__button">Favorite</button>
                    </div>
            </div>
        </div>
    )
}

export default PostCard