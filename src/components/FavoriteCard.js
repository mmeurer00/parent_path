import React from 'react';

const FavoriteCard = ({favorite}) => {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__header"></div>
                    <p>{favorite.id}</p>
            </div>
        </div>
    )
}

export default FavoriteCard