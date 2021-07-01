import React from 'react';
import ResourceCard from './ResourceCard'
import { connect } from 'react-redux'
import { fetchResources } from '../redux/resourceSlice'
import GoogleMap from './GoogleMap'
import styled from 'styled-components'

const Title = styled.h1`
    margin: 2rem;
    justify-content: 'center';
    font-size: 3rem;
`

const MapContainer = styled.div`
    margin: auto;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
    gap: 2rem;
    justify-content: center;
`

class Resource extends React.Component {

    componentDidMount(){
        this.props.loadResources()
    }

    render(){

    const resourceCards = this.props.resources.map(resource => <ResourceCard key={resource.id} resource={resource}/>)
        
        return (
            <div>
                <Title>Child Resources</Title>
                
                <Wrapper>
                {resourceCards}
                </Wrapper>
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
