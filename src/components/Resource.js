import React from 'react';
// import resources from '../resource_data'
import ResourceCard from './ResourceCard'

const Resource = ({resources}) => {
    // constructor(){
    //     super()
    //     this.state = {
    //         resources: []
    //     }
    // }

    // componentDidMount(){
    //     this.setState({
    //         resources: resources
    //     })
    // }

    const resourceCards = resources.map(resource => <ResourceCard key={resource.name} resource={resource}/>)
        
        return (
            <div>
                <h1>Resources</h1>
                {resourceCards}
            </div>
        )
}

export default Resource