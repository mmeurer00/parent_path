import React from 'react'
import FavoriteCard from './FavoriteCard'
import { fetchFavorites } from '../redux/favoriteSlice'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/postSlice'

class FavoriteDisplay extends React.Component {

    componentDidMount(){
        this.props.loadFavorites()
    }

    render(){
        console.log("asdf")
        // console.log(this.props.posts)
        // const favPosts = (favorite) => { this.props.posts.filter(post => post.id === favorite.post_id) }
        // let favPosts2 = this.props.posts.filter(post => post.id == favorite.post_id)
        // console.log(favPosts)
        const FavoritePostCards = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} favorite={favorite}/>)

        // const loadedPosts = this.props.posts
        // console.log(loadedPosts)

        return(
            <div>
                <h3>Favorite Posts</h3>
                {FavoritePostCards}
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadFavorites: () => {
            dispatch(fetchFavorites(), fetchPosts())
        } 
    } 
} 

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.all,
        posts: state.posts.all
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDisplay)