import React from 'react';
import posts from '../post_data'
import PostCard from './PostCard'

class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.setState({
            posts: posts
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

export default Post