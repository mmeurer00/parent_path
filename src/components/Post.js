import React from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/postSlice'
import { todoComponent} from "./styles"

class Post extends React.Component {

    componentDidMount(){
        this.props.loadPosts()
    }

    render(){
        
        const PostCards = this.props.posts.map(post => <PostCard key={post.title} post={post}/>)
        
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