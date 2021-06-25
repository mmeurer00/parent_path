import React from 'react';

const FavoriteCard = ({favorite}) => {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__header">{favorite.id}</div>
            </div>
        </div>
    )
}

export default FavoriteCard