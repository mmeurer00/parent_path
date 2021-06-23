import React from 'react';

const ResourceCard = ({resource}) => {
    return (
        <div>
            {resource.name}
            <button>Favorite</button>
        </div>
    )
}

export default ResourceCard