import React from 'react'
import FavoriteCard from './FavoriteCard'
import { fetchFavoritePosts } from '../redux/postSlice'
import { fetchFavoriteResources } from '../redux/resourceSlice'
import { connect } from 'react-redux'

class FavoriteDisplay extends React.Component {

    componentDidMount(){
        this.props.loadFavorites()
        this.props.loadFavorites()
    }

    render(){

        const FavoritePostCards = this.props.favoritePosts.map(favorite => <FavoriteCard key={favorite.id} favorite={favorite}/>)
        const FavoriteResourceCards = this.props.favoriteResources.map(favorite => <FavoriteCard key={favorite.id} favorite={favorite}/>)

        return(
            <div>
                <h3>Favorite Posts</h3>
                {FavoritePostCards}
                <h3>Favorite Resources</h3>
                {FavoriteResourceCards}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadFavorites: () => {
          dispatch(
              fetchFavoritePosts(),
              fetchFavoriteResources()
          )
      }  
    }
}

const mapStateToProps = (state) => {
    // console.log(state.favorites.favoritePosts)
    return {
        favoritePosts: state.favoritePosts.favoritePosts, 
        favoriteResources: state.favoriteResources.favoriteResources
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDisplay)