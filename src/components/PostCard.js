import React from 'react'
import { connect } from 'react-redux'
import { createFavoritePosts } from '../redux/favoriteSlice'

class PostCard extends React.Component {

    handleFavoriteClick = (event) => {
        event.preventDefault()
       this.props.addFavoritePost(this.props.post)
    }

    render(){
        return (
            <div className="card">
                <div className="card__content">
                    <div className="card__header">{this.props.post.title}</div>
                        <div className="card__info">
                            <p>{this.props.post.content}</p><p>{this.props.post.link}</p>
                            <button onClick={this.handleFavoriteClick} className="card__button">Favorite</button>
                        </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addFavoritePost: (post) => {
            dispatch(createFavoritePosts(post))
        }
    }
}

 
export default connect(null, mapDispatchToProps)(PostCard)


