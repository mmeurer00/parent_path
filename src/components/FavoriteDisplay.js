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
        const FavoritePostCards = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} favorite={favorite}/>)

        return(
            <div>
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