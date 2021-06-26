import React from 'react';
import ResourceCard from './ResourceCard'
import { connect } from 'react-redux'
import { fetchResources } from '../redux/resourceSlice'

class Resource extends React.Component {

    componentDidMount(){
        this.props.loadResources()
    }

    render(){

    const resourceCards = this.props.resources.map(resource => <ResourceCard key={resource.id} resource={resource}/>)
        
        return (
            <div>
                <h1>Resources</h1>
                {resourceCards}
                {/* <button onClick={() => (routeInfo.history.push("/"))}>Go Back</button> */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadResources: () => {
          dispatch(fetchResources())
      }  
    }
}

const mapStateToProps = (state) => {
    return {
        resources: state.resources.all
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resource)
