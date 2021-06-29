import React from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/postSlice'
import Button from './Button/Button'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: 5rem;
    margin: 3rem;
    align-items: 'center';
    justify-items: 'center';
`

class Post extends React.Component {

    componentDidMount(){
        this.props.loadPosts()
    }

    render(){
        
        const PostCards = this.props.posts.map(post => <PostCard key={post.id} post={post}/>)
        
        return (
            <div>
                {PostCards}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post)



// handleFavorite = (event, post) => {
//     event.preventDefault()
//     console.log(event.target)
//    this.props.addFavorite(post)
// }