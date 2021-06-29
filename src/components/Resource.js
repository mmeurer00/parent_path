import React from 'react';
import ResourceCard from './ResourceCard'
import { connect } from 'react-redux'
import { fetchResources } from '../redux/resourceSlice'
import GoogleMap from './GoogleMap'
import styled from 'styled-components'

const MapContainer = styled.div`
    margin: 'auto';
    padding: '3rem';
    position: 'absolute'
`

class Resource extends React.Component {

    componentDidMount(){
        this.props.loadResources()
    }

    render(){

    const resourceCards = this.props.resources.map(resource => <ResourceCard key={resource.id} resource={resource}/>)
        
        return (
            <div>
                <h1>Resources For You</h1>
                {resourceCards}
                <MapContainer>
                    <GoogleMap/>
                </MapContainer>
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
    console.log(state.resources.all)
    return {
        resources: state.resources.all
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resource)
