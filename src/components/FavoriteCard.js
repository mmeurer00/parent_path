import React from 'react';

const FavoriteCard = ({favorite}) => {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__header"></div>
                    <h1>{favorite.id}</h1>
                    <p></p>
            </div>
        </div>
    )
}

export default FavoriteCard