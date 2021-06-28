import React from 'react'
import { connect } from 'react-redux'
import { createFavoriteResources } from '../redux/favoriteSlice'


class ResourceCard extends React.Component {

    handleFavoriteClick = (event) => {
        event.preventDefault()
       this.props.addFavoriteResource(this.props.resource)
    }

    render(){
        return (
            <div>
                <h3>{this.props.resource.name}</h3>
                <p>{this.props.resource.description}</p>
                <p>{this.props.resource.location}</p>
                <p>{this.props.resource.link}</p>
                <button onClick={this.handleFavoriteClick} >Favorite</button>
            </div>
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

