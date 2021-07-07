import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createFavoriteResources } from '../redux/favoriteSlice'
import styled from 'styled-components'

const Card = styled.div`
    overflow: scroll;
    box-shadow: 0 2px 20px gray;
    border-radius: 10 px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in
    padding: 2rem;
`
const Name = styled.h2`
    margin: 1rem;
`
const Description = styled.div`
    margin: .5rem;
    font-size: 1.5 rem
`
const Location = styled.div`
    font-size: 1.5 rem
`
const Link = styled.div`
    margin: .5rem;
    font-size: 1 rem
`

class ResourceCard extends React.Component {

    handleFavoriteClick = (event) => {
        event.preventDefault()
       this.props.addFavoriteResource(this.props.resource)
    }

    render(){
        return (
            <Card>
                <Name>{this.props.resource.name}</Name>
                <Location>{this.props.resource.location}</Location>
                <Description>{this.props.resource.description}
                    <Link className="link" onClick={() => window.location.href = `${this.props.resource.link}`}>
                        {this.props.resource.link}
                        </Link>
                </Description>
                {/* <button onClick={this.handleFavoriteClick} >Favorite</button> */}
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavoriteResource: (resource) => {
            dispatch(createFavoriteResources(resource))
        }
    }
}

 
export default connect(null, mapDispatchToProps)(ResourceCard)

