import React from 'react';
import ResourceCard from './ResourceCard'

const Resource = ({resources, routeInfo}) => {

    const resourceCards = resources.map(resource => <ResourceCard key={resource.id} resource={resource}/>)
        
        return (
            <div>
                <h1>Resources</h1>
                {resourceCards}
                {/* <button onClick={() => (routeInfo.history.push("/"))}>Go Back</button> */}
            </div>
        )
}

export default Resource