import React from 'react';
import PostCard from './PostCard'

class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch("http://127.0.0.1:3000/posts")
        .then(r => r.json())
        .then(posts => this.setState({posts: posts}))
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