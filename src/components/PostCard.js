import React from 'react'
import { connect } from 'react-redux'
import { createFavoritePosts } from '../redux/favoriteSlice'
import styled from 'styled-components'
import Button from './Button/Button'


const CardContainer = styled.div`
    position: 'center';
    width:'50%';
    height:'100%';
    margin: 3rem;
    align-items: 'center';
    justify-items: 'center';
`
const Card = styled.div`
    margin: auto;
    postion: absolute;
    width: 40rem;
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
const CardHeader = styled.h1`
    text-transform: 'uppercase';
    font-size: '30px';
`

class PostCard extends React.Component {

    handleFavoriteClick = (event) => {
        event.preventDefault()
       this.props.addFavoritePost(this.props.post)
    }

    render(){
        return (
            <CardContainer>
            <Card>
                <CardContent>
                    <CardHeader>{this.props.post.title}</CardHeader>
                        <div className="card__info">
                            <p>{this.props.post.content}</p><p>{this.props.post.link}</p>
                            <Button onClick={this.handleFavoriteClick} className="card__button">Favorite</Button>
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
        }
    }
}

 
export default connect(null, mapDispatchToProps)(PostCard)


