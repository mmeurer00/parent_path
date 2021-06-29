import React from 'react'
import { connect } from 'react-redux'
import { createFavoritePosts } from '../redux/favoriteSlice'
import { deleteFavoritePosts } from '../redux/favoriteSlice'
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
    postion: 'absolute';
    margin: 'auto';
`
const CardHeader = styled.h2`
text-transform: 'uppercase;
    font-size: 30px;
`

class PostCard extends React.Component {

    constructor() {
        super();
        this.state = {
          liked: false
        }
      }

    handleFavoriteClick = (event) => {
        event.preventDefault()
        this.setState({
            liked: !this.state.liked
          })
        if (this.state.liked === true)
            this.props.addFavoritePost(this.props.post)
        else 
            this.props.deleteFavoritePost(this.props.post)
    }

    render(){
        const text = this.state.liked ? 'Like' : 'Unlike'

        return (
            <CardContainer>
            <Card>
                <CardContent>
                    <div className="card__header">{this.props.post.title}</div>
                        <div className="card__info">
                            <p>{this.props.post.content}</p><p>{this.props.post.link}</p>
        <Button onClick={this.handleFavoriteClick} className="card__button">{text}</Button>
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
        deleteFavoritePost: (post) => {
            dispatch(deleteFavoritePosts(post))
        }
    }
}

 
export default connect(null, mapDispatchToProps)(PostCard)


