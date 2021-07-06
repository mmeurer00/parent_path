import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/postSlice'
import styled from 'styled-components'

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
const Link = styled.p`
    margin: .5rem;
    font-size: 1.5 rem
`

class FavoriteCard extends React.Component {

    constructor(props) {
        super(props)
    }


    componentDidMount(){
        this.props.loadPosts()
    }

    render(){
       
        let favPost = {}
        this.props.posts.map(post => {
            if(post.id === this.props.favorite.post_id)
                return favPost = {
                    title: post.title, 
                    content: post.content,
                    link: post.link
                }
        })
            
        return (
            <CardContainer>
                <Card>
                    <CardContent>
                        <div className="card__header">{favPost.title}</div>
                        <div className="card__info">
                            <p>{favPost.content}</p>
                            <Link className="link">{favPost.link}</Link>
                        </div>
                    </CardContent>
                </Card>
            </CardContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadPosts: () => {
          dispatch(fetchPosts())
      }  
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.all
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard)