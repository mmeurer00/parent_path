import React from 'react';
import resources from '../resource_data'
import ResourceCard from './ResourceCard'

class Resource extends React.Component {
    constructor(){
        super()
        this.state = {
            resources: []
        }
    }

    componentDidMount(){
        this.setState({
            resources: resources
        })
    }

    render(){
        const resourceCards = this.state.resources.map(resource => <ResourceCard key={resource.name} resource={resource}/>)
        return (
            <div>
                {resourceCards}
            </div>
        )
    }
}

export default Resource