import React from 'react'
import FavoriteCard from './FavoriteCard'
import { fetchFavoritePosts } from '../redux/postSlice'
import { connect } from 'react-redux'

class FavoriteDisplay extends React.Component {

    componentDidMount(){
        console.log("hey!asdfasfsfasdf")
        this.props.loadFavorites()
    }

    render(){

        const FavoriteCards = this.props.favorites.map(favorite => <FavoriteCard key={favorite.id} favorite={favorite}/>)

        return(
            <div>
                {FavoriteCards}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadFavorites: () => {
          dispatch(fetchFavoritePosts())
      }  
    }
}

const mapStateToProps = (state) => {
    // console.log(state.favorites.favoritePosts)
    return {
        favorites: state.favorites.favoritePosts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteDisplay)