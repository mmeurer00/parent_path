import React from 'react'
import FavoriteCard from './FavoriteCard'
import { fetchFavorites } from '../redux/favoriteSlice'
import { connect } from 'react-redux'

class FavoriteDisplay extends React.Component {

    componentDidMount(){
        this.props.loadFavorites()
    }

    render(){

        const FavoritePostCards = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} favorite={favorite}/>)

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
          dispatch(fetchFavorites()) 
      }  
    } 
} 

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.all
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDisplay)