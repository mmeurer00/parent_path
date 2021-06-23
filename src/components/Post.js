import React from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/postSlice'

class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.setState = ({
            posts: []
        })
    }

    render(){
        
        const PostCards = this.state.posts.map(post => <PostCard key={post.title} post={post}/>)
        
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
        posts: state.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)