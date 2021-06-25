import React from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/postSlice'

class Post extends React.Component {

    componentDidMount(){
        this.props.loadPosts()
    }

    render(){
        
        const PostCards = this.props.posts.map(post => <PostCard key={post.id} post={post}/>)
        
        return (
            <div>
                <button>Top Posts</button>
                search tags
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