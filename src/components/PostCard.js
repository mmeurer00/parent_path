import React from 'react'
import { connect } from 'react-redux'
import { createFavoritePosts } from '../redux/favoriteSlice'
import { deleteFavoritePosts } from '../redux/favoriteSlice'
import { fetchFavorites } from '../redux/favoriteSlice'
import styled from 'styled-components'
import Button from './Button/Button'

const CardContainer = styled.div`
    position: 'center';
    width:'100%';
    height:'100%';
    margin: 3rem;
    align-items: 'center';
    justify-items: 'center';
`
const Card = styled.div`
    margin: auto;
    postion: absolute;
    width: 30rem;
    height: 15rem;
    padding: auto;
    text-align: center;
    background: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 25px 25px 50px grey, -25px -25px 50px grey
  `
const CardContent = styled.div`
    postion: absolute;
    margin: auto;
`
const CardHeader = styled.h2`
    text-transform: uppercase;
    font-size: 30px;
`
const Link = styled.p`
    margin: .5rem;
    font-size: 1.5 rem
`
class PostCard extends React.Component {

    componentDidMount(){
        this.props.loadFavorites()
    }

    handleFavoriteClick = (event, liked) => {
        event.preventDefault()
        // this.setState({
        //     liked: !this.state.liked
        //   }) 
        if (liked === true)
            this.props.addFavoritePost(this.props.post)
        else 
            this.props.deleteFavoritePost(this.props.post, this.props.favorites)
    }

    render(){
        const liked = false
        return (
            <CardContainer>
                <Card>
                    <CardContent>
                        <div className="card__header">{this.props.post.title}</div>
                            <div className="card__info">
                                <p>{this.props.post.content}</p>
                                <Link className="link">{this.props.post.link}</Link>
                                <Button onClick={() => (this.handleFavoriteClick, liked)} className="card__button">Like</Button>
                            </div>
                    </CardContent>
                </Card>
            </CardContainer>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addFavoritePost: (post) => {
            dispatch(createFavoritePosts(post))
        },
        deleteFavoritePost: (post, favorites) => {
            dispatch(deleteFavoritePosts(post, favorites))
        },
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

 
export default connect(mapStateToProps, mapDispatchToProps)(PostCard)


